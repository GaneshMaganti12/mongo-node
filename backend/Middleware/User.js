const User = require('../Models/User')
const jwt = require('jsonwebtoken')

const isAuthenticated = async( req, res, next) =>{
    const token = req.headers['authorization']
    console.log(token)

    if(token){
        const jwtToken = token.split(" ")
        const decodeToken = jwt.verify(jwtToken[1], "p@ssw0rd")
        next()
    }else{
        res.json("You are not authorized for access the data")
    }
}

const AuthenticatedUser = async (req, res, next) =>{
    const user = await User.findOne({email: req.body.email})

    if(user){
        const isMatch = await user.matchPassword(req.body.password)
        if(isMatch){
            next()
        }else{
            res.json("Invalid Password")
        }
    }else{
        res.json("Invalid User")
    }
}

module.exports = {AuthenticatedUser, isAuthenticated}