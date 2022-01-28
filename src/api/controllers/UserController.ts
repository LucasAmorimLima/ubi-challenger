import {getManager} from "typeorm";
import { Request, Response} from "express";
import {User} from "../entity/User";

class UserController {

    static create = async (req: Request,res: Response): Promise<Response> =>{
        const  userRepository = getManager().getRepository(User);
 
        const findEmail = await userRepository.findOne({email:req.body.email});

        if (findEmail) {
            return res.status(400).json({
                error :"Email has already used"
            })
        }
     
        const user = await userRepository.save(req.body);

        return res.json(user)
    }

}

export default UserController