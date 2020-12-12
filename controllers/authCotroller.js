const User = require("../models/userModel")
const bcrypt = require("bcryptjs")


exports.authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password, salt)
    /*
        -validate the fields
        -check already registered
        
    */
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



exports.authLogin = (req, res) => {
//todo: register func.
    res.send("Login completed")
}





// console.log(
//     "fields:",
//     firstName, 
//     lastName, 
//     email, 
//     password
// )