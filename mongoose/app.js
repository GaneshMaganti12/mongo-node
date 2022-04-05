const express = require('express')
const app = express()
const colors = require('colors')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoute = require("./Routes/Products")
const userRoute = require('./Routes/User')

const url = 'mongodb://localhost:27017/Ganesh'

const connectToMongoose = async() =>{
    await mongoose.connect(url)
    console.log("connected to mongodb database".yellow)
}

connectToMongoose()

app.use(cors())
app.use(express.json())
app.use("/products", productRoute)
app.use('/users', userRoute)

app.listen(3003, () =>console.log("server is running in 3003 port"))