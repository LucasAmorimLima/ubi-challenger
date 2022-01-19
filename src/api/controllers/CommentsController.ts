import {Request,Response} from 'express'
import Comments from "../schemas/Comment";
import Classes from "../schemas/Classe";


class CommentController {
    
    public async findAll(req: Request,res: Response): Promise<Response> {
        const comments  =  await Comments.find()
        
        return res.json(comments)
    }    
    public async delete(req: Request,res: Response): Promise<Response> {
        const comment  =  await Comments.deleteOne()
        
        return res.json(comment)
    }
    public async create(req: Request,res: Response): Promise<Response> {
        const {id_class} = req.body
        
        const comment = await Comments.create(req.body)

        const result = await Classes.find({id: id_class})
        const total_comments = result[0].total_comments

        const update = await Classes.updateOne({_id: id_class},{total_comments: (total_comments+1)})
        return res.json({
            comment: comment,
            update : update
        })
    }
}

export default new CommentController()