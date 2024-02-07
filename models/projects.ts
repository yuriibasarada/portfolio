import {Schema, model, models, Types} from 'mongoose'


const ProjectSchema =  new Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    short_description: {
        type: String
    },
    tag: {
      type: String
    },
    tags: {
        type: []
    },
    has_metrics: Boolean
})

const Project = models.Project || model('Project', ProjectSchema)

export default Project