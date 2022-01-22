import {Router} from 'express'
import UserController from '../api/controllers/UserController'
import { joiMiddleware } from './joiMidlleware'

const routes = Router()

routes.post('/users',joiMiddleware, UserController.login)


export default routes