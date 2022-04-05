const express = require('express')
const cors = require('cors')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')
const employeeRouter = require('./Routes/Employees')


const url = 'mongodb://localhost:27017/Ganesh'

const connectToDb = async() =>{
    await mongoose.connect(url)
    console.log("connected to db");
}

connectToDb()

app.use(cors())
app.use(express.json())
app.use('/employees', employeeRouter)


app.listen(3001, () =>console.log("server is running in 3001 port".red))