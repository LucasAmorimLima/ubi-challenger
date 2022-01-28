import {getManager} from "typeorm";
import { Request, Response} from "express";
import {Task} from "../entity/Task";
import { User } from "../entity/User";

class TaskController {

    static create = async (req: Request,res: Response): Promise<void> =>{
        const  taskRepository = getManager().getRepository(Task);
        const  userRepository = getManager().getRepository(User);
        const {id} = req.body
        
        await userRepository.findOneOrFail(id).then(async(user)=>{
            const data = {
                "createAt": new Date()
            }
            const task = await taskRepository.save(
                {
                    user,
                    ...data,
                    ...req.body
                });
    
            return res.json(task)
        }).catch(()=>{
            return res.status(401).json({erro:"User not found"})
        })        
        
    }

    static finalized = async (req: Request,res: Response): Promise<void> =>{

        const  taskRepository = getManager().getRepository(Task);
        const {id} = req.body

        await taskRepository.findOneOrFail(id).then(async(task)=>{
            if (task.finalized) {
                return res.status(400).json({erro:"Task has already been completed"})
            }
            const taskUpdate = await taskRepository.update(
                {id:id},{
                   dateFinalized:new Date,
                   finalized: true
                });
    
            return res.status(200).json(taskUpdate)
        }).catch(()=>{
            return res.status(401).json({erro:"Task not found"})
        })   
    }

    static update = async (req: Request,res: Response): Promise<void> =>{

        const  taskRepository = getManager().getRepository(Task);
        const {id} = req.body
        const {description,term} = req.body

        await taskRepository.findOneOrFail(id).then(async(task)=>{
            if (task.finalized) {
                return res.status(400).json({erro:"Cannot update, task has already been completed"})
            }
            await taskRepository.update(
                {id:id},
                {
                    description:description,
                    term:term,
                    updateAt: new Date()
                });
            const taskUpdated = await taskRepository.findOne(id);
    
            return res.status(200).json(taskUpdated)
        }).catch(()=>{
            return res.status(400).json({erro:"Task not found"})
        })
        
    }

    static findAll = async (req: Request,res: Response): Promise<void> =>{
        const  taskRepository = getManager().getRepository(Task);
        const  userRepository = getManager().getRepository(User);
        console.log(req.body);
        const {id} = req.body
        
        await userRepository.findOneOrFail({id:id}).then(async(user)=>{
            const task = await taskRepository.find(
                {
                    user:user
                });
            return res.json(task)
        }).catch(()=>{
            return res.status(400).json({erro:"User not found"})
        })
    }
}

export default TaskController