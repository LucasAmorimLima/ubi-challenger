import {Router} from 'express'
import TaskController from '../api/controllers/taskController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'


const routes = Router()

routes.post('/users/task/add',authMiddleware, joiMiddleware,TaskController.create )
routes.put('/users/task/finalized/',authMiddleware,TaskController.finalized)
routes.put('/users/task/update/',authMiddleware, joiMiddleware,TaskController.update)
routes.get('/users/task/find/',authMiddleware,TaskController.findAll)

export default routes