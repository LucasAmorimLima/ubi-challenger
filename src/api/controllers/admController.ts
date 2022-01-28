import {Request,Response} from 'express'
import { getManager } from 'typeorm';
import { User } from '../entity/User';
import { findFormated } from '../services/findFormated';

class AdmController {

    static findAll =  async (req: Request,res: Response): Promise<void> => {
        const  userRepository = getManager().getRepository(User);
        const {search,page=0,perPage=10} = req.query

        await userRepository.find(
            {
            where: {role:"users"},
            relations: ['task'],
            skip : parseInt(page as string),
            take : parseInt(perPage as string),

        }).then(async(user)=>{
            if (search==='term') {
                return res.status(200).json(await findFormated(user,true))
            }          
            return res.status(200).json(await findFormated(user,false))
        }).catch(()=>{
            return res.status(400).json({erro:"User not found"})
        })
        
    }
}

export default AdmController