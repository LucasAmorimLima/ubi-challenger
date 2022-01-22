import {Schema,model, Document} from 'mongoose'

interface PlacesInterface extends Document{
    name: string,
    photo : string
}
const PlacesSchema = new Schema({
    name: String,
    photo: String
},
{
    timestamps: false
})

export default model<PlacesInterface>('Places',PlacesSchema)