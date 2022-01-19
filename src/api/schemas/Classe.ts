import {Schema,model, Document} from 'mongoose'
import {CommentSchema} from './Comment'
interface ClasseInterface extends Document{
    name: string,
    description: string,
    data_init: Date,
    data_end: Date,
    total_comments: number   
}
const ClasseSchema = new Schema({
    name: String,
    description: String,
    data_init: Date,
    data_end: Date,
    total_comments: Number,

    child : CommentSchema

},
{
    
    timestamps: true
})



export default model<ClasseInterface>('Classes',ClasseSchema)