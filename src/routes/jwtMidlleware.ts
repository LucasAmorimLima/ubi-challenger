import { Request, Response, NextFunction } from "express";
import {DecodeResult,ExpirationStatus,Session} from '../api/services/jwt/interfaces'
import {decodeSession} from '../api/services/jwt/decodeJWT'
import {encodeSession} from '../api/services/jwt/generateJWT'
import {checkExpirationStatus} from '../api/services/jwt/sessionExpired'
import { jwtConstants } from "../api/services/jwt/constants";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const unauthorized = (message: string) => res.status(401).json({
        ok: false,
        status: 401,
        message: message
    });

    const requestHeader = "authorization";
    

    const responseHeader = "X-Renewed-Token";
    const header = req.header(requestHeader);
    const splitHeader: Array<string[]> = []
    console.log(header)

    if (!header) {
        unauthorized(`Required ${requestHeader} header not found.`);
        return;
    }
    else {
        const split: string[] = header.split(" ")
        splitHeader.push(split)
    }
    console.log(splitHeader[0][0]);
    console.log(splitHeader[0][2]);
    if (splitHeader[0][0] !== "Bearer") {
        unauthorized(`Failed to decode or validate authorization token. Reason: invalid-token.`);
        return;
    }
    const decodedSession: DecodeResult = decodeSession(jwtConstants.secret, splitHeader[0][2] || splitHeader[0][1] );
    
    if (decodedSession.type === "integrity-error" || decodedSession.type === "invalid-token") {
        unauthorized(`Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`);
        return;
    }

    const expiration: ExpirationStatus = checkExpirationStatus(decodedSession.session);

    if (expiration === "expired") {
        unauthorized(`Authorization token has expired. Please create a new authorization token.`);
        return;
    }

    let session: Session;

    if (expiration === "grace") {
        // Automatically renew the session and send it back with the response
        const { token, expires, issued } = encodeSession(jwtConstants.secret, decodedSession.session);
        session = {
            ...decodedSession.session,
            expires: expires,
            issued: issued
        };

        res.setHeader(responseHeader, token);
    } else {
        session = decodedSession.session;
    }

    // Set the session on response.locals object for routes to access
    res.locals = {
        ...res.locals,
        session: session
    };

    // Request has a valid or renewed session. Call next to continue to the authenticated route handler
    next();
}