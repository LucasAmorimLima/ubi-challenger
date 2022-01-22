import {Request,Response} from 'express'
import User from "../schemas/User";
import { jwtConstants } from '../services/jwt/constants';
import { encodeSession } from '../services/jwt/generateJWT';
class UserController {

    public async login(req: Request,res: Response): Promise<Response> {
        const {email,password} = req.body
        const authenticate = await User.find(
            {email: email},
            {password: password}
        )
        const session = encodeSession(jwtConstants.secret, {
            id: authenticate[0].id,
            username: authenticate[0].name,
            dateCreated: authenticate[0].createdAt        
        });
        
        return res.json(
            {
                authenticate: authenticate,
                session: session
            }
        )
    }

}

export default new UserController()