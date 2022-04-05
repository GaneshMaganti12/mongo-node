const express = require('express')
const router = express.Router()
const User = require('../Modals/User')
const {Authenticated} = require('../Middleware/User')

router.post('/signup', async(req, res) =>{
    const user = await User.create(req.body)
    
    const token = user.getJwtSignup()
    res.json({auth: true, token: token})
})

router.post('/login',Authenticated, async(req, res) =>{
    const user = await User.findOne({email: req.body.email})

    const token = user.getJwtSignup()
    res.json({auth: true, token: token})
})


module.exports = router