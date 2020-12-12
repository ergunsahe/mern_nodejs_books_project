const express = require("express")
const authController = require("../controllers/authCotroller")
const {check} = require("express-validator");

const router = express.Router()

// routes for /api/auth/register
/**
 * @route POST /
 * @desc register endpoint
 * @access public
 */

router.post(
    "/register", 
    [
        check("password", "Please enter a possword with 6 and more chars").isLength(
            {
                min:6
            }
        ),
        check("email", "Please enter a valid email").isEmail()
    ], 
    authController.authRegister)

/**
 * @route   POST /api/auth/login
 * @desc    login endpoint
 * @access  public/private
 */
router.post("/login", authController.authLogin)

module.exports = router