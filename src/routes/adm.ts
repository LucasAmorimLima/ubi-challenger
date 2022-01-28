import {Router} from 'express'
import AdmController from '../api/controllers/admController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'


const routes = Router()

routes.get('/adm/find',authMiddleware,joiMiddleware, AdmController.findAll)
routes.post('/adm/add', AdmController.create)


export default routes