const User = require('../Modals/User')
const jwt = require('jsonwebtoken')

const isAuthenticated = async function(req, res, next){
    console.log(req.headers)
    const token = req.headers['authorization']

    if(token){
        const tokens = token.split(" ")
        console.log(tokens)
        try{
            const decode = jwt.verify(tokens[1], 'p@assw0rd')
            next();
        }catch(err){
            console.log(err)
            res.json("You are not authorized")
        }
    }else{
        res.json("You are not authorized")
    }
}

const Authenticated = async(req, res, next) =>{
    const user = await User.findOne({email: req.body.email})

    if(user){
        const isMatch = await user.matchPassword(req.body.password)
        if(isMatch){
            next()
        }else{
            res.json("invalid password")
        }
    }else{
        res.json("invalid user")
    }
}

module.exports = {Authenticated, isAuthenticated}