import {Schema,model, Document} from 'mongoose'

interface UserInterface extends Document{
    name: string,
    email: string,
    password: string,
    createdAt: Date
    
}
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
},
{
    timestamps: true
})

export default model<UserInterface>('Users',UserSchema)