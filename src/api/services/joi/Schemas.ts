//import moment from "moment";
import Joi from 'joi'

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase()
const name =  Joi.string().min(3).max(30).required()
//const data  = Joi.date().default(() => moment().utc().format()).required()

export const usersSchema = Joi.object({
    name : Joi.string().min(3).max(30),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
export const placesSchema = Joi.object({
    name : name,
});
