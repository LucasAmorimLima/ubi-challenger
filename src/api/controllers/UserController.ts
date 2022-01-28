import {getManager} from "typeorm";
import { Request, Response} from "express";
import {User} from "../entity/User";

class UserController {

    static create = async (req: Request,res: Response): Promise<Response> =>{
        const  userRepository = getManager().getRepository(User);
        const {email, password, role="users"} = req.body
        const findEmail = await userRepository.findOne({email:req.body.email});

        if (findEmail) {
            return res.status(400).json({
                error :"Email has already used"
            })
        }
     
        const user = await userRepository.save({
            email: email,
            password: password,
            role: role
        });

        return res.json(user)
    }

}

export default UserController