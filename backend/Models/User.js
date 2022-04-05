const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/@gmail.com$/, "Please enter valid email"]
    },
    password: {
        type: String,
        minlength: 6
    }
})


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

userSchema.methods.jwtSignup = function(){
    const token = jwt.sign({id: this._id}, "p@ssw0rd", {expiresIn: "5d"})
    return token
}

const User = mongoose.model("User", userSchema)

module.exports = User