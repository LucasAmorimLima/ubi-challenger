import moment from "moment";
import Joi from 'joi'

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase()
const name =  Joi.string().min(3).max(30).required()
const data  = Joi.date().default(() => moment().utc().format()).required()
 

export const usersSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
export const commentsSchema = Joi.object({ 
    name : name,
    comment : Joi.string().max(250).required(),
    
});
export const classesSchema = Joi.object({
    name : name,
    description : Joi.string().max(250).required(),
    data_init: data,
    data_end: data,
    totalcomments: Joi.number().required()

    
});
