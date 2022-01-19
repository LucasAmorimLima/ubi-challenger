import {Router} from 'express'
import ClassesController from '../api/controllers/ClassesController'
import { joiMiddleware } from './joiMidlleware'
import {authMiddleware} from './jwtMidlleware'

const routes = Router()

routes.post('/classes',authMiddleware,joiMiddleware, ClassesController.create)
routes.get('/classes',authMiddleware, ClassesController.findAll)
routes.get('/classes/:id',authMiddleware, ClassesController.findById)
routes.put('/classes/',authMiddleware, ClassesController.update)
routes.delete('/classes/:id',authMiddleware, ClassesController.delete)

export default routes