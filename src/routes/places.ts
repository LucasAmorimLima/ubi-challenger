import {Router} from 'express'
import PlacesController from '../api/controllers/PlacesController'
import { joiMiddleware } from './joiMidlleware'
import {authMiddleware} from './jwtMidlleware'

const routes = Router()

routes.post('/places',authMiddleware,joiMiddleware, PlacesController.create)
routes.get('/places',authMiddleware, PlacesController.findAll)
routes.get('/places/:id',authMiddleware, PlacesController.findById)
routes.put('/places/:id',authMiddleware, PlacesController.update)
routes.delete('/places/:id',authMiddleware, PlacesController.delete)

export default routes