const express = require('express')
const router = express.Router()
const Courses = require('../Models/Courses')
const {isAuthenticated} = require('../Middleware/User')

router.get('/', isAuthenticated, async(req, res) =>{
    const course = await Courses.find()
    res.json(course)
})

router.post('/',isAuthenticated, async(req, res) =>{
    await Courses.create(req.body)
    res.status(201).json("data is added to database")
})

router.delete('/:id',isAuthenticated, async(req, res) =>{
    await Courses.findByIdAndDelete(req.params.id)
    res.json("data is deleted from database")
})

router.patch('/:id',isAuthenticated, async(req, res) =>{
    await Courses.findByIdAndUpdate(req.params.id, req.body)
    res.json("data is updated in database")
})

module.exports = router