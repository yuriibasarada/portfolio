import {Schema, model, models} from 'mongoose'


const SkillSchema =  new Schema({
    img: {
        type: String,
        required: [true, 'Img is required'],
    },
    name: {
        type: String,
        require: [true, 'Name is required']
    }
})

const Skill = models.Skill || model('Skill', SkillSchema)

export default Skill