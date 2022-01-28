import {Router} from 'express'
import UserController from '../api/controllers/loginController'
import { joiMiddleware } from './joiMidlleware'

const routes = Router()

routes.post('/users/login',joiMiddleware, UserController.login)


export default routes