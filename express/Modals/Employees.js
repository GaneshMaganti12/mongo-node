const mongoose = require('mongoose')
const Schema = mongoose.Schema


const EmployeeSchma = new Schema ({
    name: {
        type: String
    },
    salary: {
        type: Number
    }
})

const Employee = mongoose.model('Employees', EmployeeSchma)

module.exports = Employee