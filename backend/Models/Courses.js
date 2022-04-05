const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    course: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course