import {Schema, model, models} from 'mongoose'


const UserSchema =  new Schema({
    email: {
        type: String,
        unique: [true, 'Email is unique'],
        equired: [true, 'Email is required'],
    },
    username: {
        type: String,
        require: [true, 'Username is required']
    },
    image: {
        type: String
    }
})

const User = models.User || model('User', UserSchema)

export default User