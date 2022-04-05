const express = require('express')
const router = express.Router()
const Employee = require('../Modals/Employees')

router.get('/', async(req, res) =>{
    const data = await Employee.find()
    res.json(data)
})

router.post('/', async(req, res)=>{
    const create = await Employee.create(req.body)
    res.json(create)
})

router.patch('/:id', async(req, res)=>{
    const updated = await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json("Successfully updated")
})

router.delete('/:id', async(req, res)=>{
    const deleted = await Employee.findByIdAndDelete(req.params.id, req.body)
    res.json("Successfully Deleted")
})

module.exports = router