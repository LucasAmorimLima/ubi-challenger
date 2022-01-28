import moment from "moment";
import Joi from 'joi'

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase()
const name =  Joi.string().min(3).max(30).required()
const data  = Joi.date().default(() => moment().format()).required()


export const taskUpdateSchema = Joi.object({
    body: Joi.object({
        description : name,
        term: data 
    })
});

export const taskAddSchema = Joi.object({
    body: Joi.object({
        name : name,
        description: name,
        term: data,
        finalized: Joi.boolean().required(),
        userId: Joi.string().guid({
        version:['uuidv4']
        }).required()
    })

});

export const usersAddSchema = Joi.object({
    body: Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    
});

export const loginSchema = Joi.object({
    body: Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
    
});

export const findAllSchema = Joi.object({
    query: Joi.object({
        search: Joi.string().valid('1','0').insensitive(),
        page: Joi.number(),
        perPage: Joi.number()
    })
})