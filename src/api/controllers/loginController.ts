import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import {User} from "../entity/User";
import { jwtConstants } from '../../configs/jwt/constants';
import { encodeSession } from '../../configs/jwt/generateJWT';

class LoginController {

    static  login = async (req: Request,res: Response): Promise<Response> =>{
        const userRepository = getRepository(User);
        const {email,password} = req.body

        const authenticate = await userRepository.findOne(
            {email: email , password: password}
        )
        if(!authenticate){
            return res.status(400).json({"Error":"email or password invalids"})
        }
        const session = encodeSession(jwtConstants.secret, {
            id: authenticate.id,
            role: authenticate.role
        });
        
        return res.json(
            {
                authenticate: authenticate,
                session: session
            }
        )
    }

}

export default LoginController