import {Router} from 'express'
import UserController from '../api/controllers/userController'
import { joiMiddleware } from './joiMidlleware'

const routes = Router()

routes.post('/users/add', joiMiddleware,UserController.create )


export default routes