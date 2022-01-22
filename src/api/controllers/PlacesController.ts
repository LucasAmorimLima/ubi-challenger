import {Request,Response} from 'express'
import Places from "../schemas/Places";
import { getPhoto } from '../services/axios/getUrlPhoto';

class PlacesController {

    public async findAll(req: Request,res: Response): Promise<Response> {
        const {search} = req.query
        
        if (search) {
            const places  = await Places.find({name: { $regex: search} }).limit(50).sort("name")
            return res.json(places)
        } else {
            const places  = await Places.find({}).limit(50).sort("name")
            return res.json(places)
        }   
    }
    public async findById(req: Request,res: Response): Promise<Response> {
        const {id} = req.params
        
        const place  =  await Places.findOne({_id: id})
    
        return res.json(place)
    }

    public async update(req: Request,res: Response): Promise<Response> {
        const {id} = req.params
        const {name} = req.body
        const photo = await getPhoto(name)

        const updatePlace  =  await Places.updateOne({_id: id},{
            name: name,
            photo: photo
        })
        const newplace  =  await Places.findOne({_id: id})
        return res.json({
            updatePlace:updatePlace,
            newplace:newplace
        })
    }
    public async delete(req: Request,res: Response): Promise<Response> {
        const {id} = req.params

        const place  =  await Places.deleteOne({_id: id})
        return res.json(place)
    }
    public async create(req: Request,res: Response): Promise<Response> {
        const {name} = req.body
        const photo = await getPhoto(name)

        const place = await Places.create({
            name: name,
            photo: photo
        })
        return res.json(place)
    }
}

export default new PlacesController()