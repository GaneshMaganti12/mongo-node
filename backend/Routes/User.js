const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const {AuthenticatedUser} = require('../Middleware/User')

router.post('/signup', async(req, res) =>{
    const user = await User.create(req.body)

    const token = user.jwtSignup()
    res.json({auth: true, token: token})
})

router.post('/login', AuthenticatedUser, async(req, res) =>{
    const user = await User.findOne({email: req.body.email})

    const token = user.jwtSignup()
    res.json({auth: true, token: token})
})


module.exports = router