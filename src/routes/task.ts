import {Router} from 'express'
import TaskController from '../api/controllers/taskController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'


const routes = Router()

routes.post('/users/task/add',authMiddleware, joiMiddleware,TaskController.create )
routes.put('/users/task/finalized/:id',authMiddleware, joiMiddleware,TaskController.finalized)
routes.put('/users/task/update/:id',authMiddleware, joiMiddleware,TaskController.update)
routes.get('/users/task/find/:id',authMiddleware,joiMiddleware,TaskController.findAll)

export default routes