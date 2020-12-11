exports.authRegister = (req, res) => {
    
    /*
        -validate the fields
        -check already registered
        -crypt password
        -save user to DB
    */

    const { firstName, lastName, email, password } = req.body;
    console.log(
        "fields:",
        firstName, 
        lastName, 
        email, 
        password
    )
    res.send("Register completed")
}



exports.authLogin = (req, res) => {
//todo: register func.
    res.send("Login completed")
}