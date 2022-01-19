import {Router} from 'express'

import CommentsController from '../api/controllers/CommentsController'
import { joiMiddleware } from './joiMidlleware'
import { authMiddleware } from './jwtMidlleware'

const routes = Router()

routes.post('/comments',authMiddleware,joiMiddleware, CommentsController.create)
routes.get('/comments',authMiddleware, CommentsController.findAll)
routes.delete('/comments/:id',authMiddleware, CommentsController.delete)

export default routes