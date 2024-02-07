import {Schema, model, models} from 'mongoose'


const SkillSchema =  new Schema({
    img: {
        type: String,
        unique: [true, 'Email is unique'],
        equired: [true, 'Email is required'],
    },
    name: {
        type: String,
        require: [true, 'Username is required']
    }
})

const Skill = models.User || model('Skill', SkillSchema)

export default Skill