const express = require('express')
const router = express.Router()
const Product = require('../Modals/Products')
const {isAuthenticated} = require('../Middleware/User')

router.get("/", isAuthenticated, async(req, res)=>{
    const data = await Product.find()
    res.json(data)
})

router.post("/",isAuthenticated, async(req, res)=>{
    const create = await Product.create(req.body)
    res.status(201).json(create)
})

router.patch("/:id",isAuthenticated, async(req, res)=>{
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json(updated)
})

router.delete("/:id",isAuthenticated, async(req, res)=>{
    const deleted = await Product.findByIdAndDelete(req.params.id, req.body)
    res.json(deleted)
})


module.exports = router