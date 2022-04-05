const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const courseRoute = require('./Routes/Courses')
const userRoute = require('./Routes/User')


const url = 'mongodb://localhost:27017/Ganesh'

const connectToDb = async() =>{
    await mongoose.connect(url)
    console.log("connected to db")
}

connectToDb()

app.use(cors())
app.use(express.json())
app.use('/courses', courseRoute)
app.use('/users', userRoute)


app.listen(3000, () => console.log("server is running in 3000 port"))