import {Schema,model, Document} from 'mongoose'

interface CommentInterface extends Document{
    id_class: Schema.Types.ObjectId,
    comment: string,
    updatedAt: Date,
    createdAt: Date,
    last_comment: string,
    last_comment_date:Date
}
export const CommentSchema = new Schema({
    id_class: Schema.Types.ObjectId,
    comment: String,
},
{
    timestamps: true
})

export default model<CommentInterface>('Comments',CommentSchema)