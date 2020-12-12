const User = require("../models/userModel")


exports.authRegister = async (req, res) => {
    
    /*
        -validate the fields
        -check already registered
        -crypt password
        -save user to DB
    */

    const { firstName, lastName, email, password } = req.body;
    const user = new User ({
        firstName,
        lastName,
        email,
        password // crypted password
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