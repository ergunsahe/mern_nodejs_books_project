const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken")


exports.authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password, salt)
    
    
    const validationErr = validationResult(req)
    if (validationErr?.errors?.length > 0) {
        return res.status(400).json({errors: validationErr.array()})
    }
    const userData = await User.findOne({email})
    if (userData) {
        return res.status(400).json({errors: [{message: "User already exist!"}]})
    }
    const user = new User ({
        firstName,
        lastName,
        email,
        password: newPassword // crypted password
    })
    
    await user.save()

    // todo:error handling for saving
    res.send("Register completed")
}



exports.authLogin = async (req, res) => {
    // field validation
    // user exist ?
   // password compare
   // authentocation json web token jwt token
    const { email, password } = req.body;
    const validationErr = validationResult(req)
    if (validationErr?.errors?.length > 0) {
        return res.status(400).json({errors: validationErr.array()})
    }
    const userData = await User.findOne({email})
    if (!userData) {
        return res.status(400).json({errors: [{message: "User doesn't exist!"}]})
    }
    
    const isPasswordMatch = await bcrypt.compare(password, userData.password)
    if (!isPasswordMatch) {
        res.status(400).json({errors: [{message: "Invalid entry"}]})
    }

    jwt.sign({userData}, process.env.JWT_SECRET_KEY, {expiresIn: 3600}, (err, token) => {
        if (err) {
            res.status(400).json({errors: [{message: "Unknown Error"}]})
        }
        res.send(token)
        
    })
}





// console.log(
//     "fields:",
//     firstName, 
//     lastName, 
//     email, 
//     password
// )