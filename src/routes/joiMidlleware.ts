import { Request, Response, NextFunction } from 'express'
import _ from 'lodash';
import {
  findAllSchema,
  findAllTaskSchema,
  loginSchema,
  taskAddSchema,
  usersAddSchema,
  taskFinalizedSchema,
  taskUpdateSchema} 
from '../configs/joi/Schemas'
import {Schema} from 'joi'

const Schemas = {
    '/users/task/add' : taskAddSchema,
    '/users/task/finalized/:id' : taskFinalizedSchema,
    '/users/task/update/:id' : taskUpdateSchema,
    '/users/login' :loginSchema,
    '/users/add' :usersAddSchema,
    '/users/task/find/:id' : findAllTaskSchema,
    '/adm/find': findAllSchema
}

    
export function joiMiddleware(req: Request, res: Response, next: NextFunction) {
  const supportedMethods = ['post','put','get']
  const _validationOptions = {
      abortEarly: false,  // abort after the last validation error
      allowUnknown: true, // allow unknown keys that will be ignored
      stripUnknown: true  // remove unknown keys from the validated data
  };
  const route: string = req.route.path
  const method: string = req.method.toLowerCase()

  if (_.includes(supportedMethods,method) && _.has(Schemas,route)) {
        const _schema:Schema = _.get(Schemas, route);
        
        const {error} = _schema.validate(
          {
            body:req.body,
            params:req.params, 
            query:req.query
          },_validationOptions)
          
        if (error) {
          
            // Joi Error
            const JoiError = {
              status: 'failed',
              error: {
                // fetch only message and type from each error
                details: _.map(error.details, ({message, type}) => ({
                  message: message.replace(/['"]/g, ''),
                  type
                }))
              }
            };

            // Send back the JSON error response
            res.status(422).json(JoiError);
    } else {
        next()
    }
  }
}
/*  */