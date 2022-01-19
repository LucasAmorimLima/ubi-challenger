import {Request,Response} from 'express'
import Classes from "../schemas/Classe";
import Comment from '../schemas/Comment';
import {findallFormated} from '../services/findallformated'
class ClasseController {

    public async findAll(req: Request,res: Response): Promise<Response> {
        const {name,description,data_init,data_end} = req.query
        
        const result  = await findallFormated(name,description,data_end,data_init) 
        
        
        
        return res.json(result)
    }
    public async findById(req: Request,res: Response): Promise<Response> {
        const {id} = req.params
        
        const classe  =  await Classes.findOne({_id: id})
        
        const comment  = await Comment.find({id_class: id}).sort('-createdAt').limit(3)
        
        return res.json({
            classe : classe,
            Comments :comment
        })
    }
    public async update(req: Request,res: Response): Promise<Response> {
        const {id} = req.body
        
        const classe  =  await Classes.updateOne({_id: id},req.body)
        return res.json(classe)
    }
    public async delete(req: Request,res: Response): Promise<Response> {
        const {id} = req.params

        const classe  =  await Classes.deleteOne({_id: id})
        return res.json(classe)
    }
    public async create(req: Request,res: Response): Promise<Response> {
        const classe = await Classes.create(req.body)
        return res.json(classe)
    }
}

export default new ClasseController()