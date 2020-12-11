const express = require("express")
const authController = require("../controllers/authCotroller")

const router = express.Router()

// routes for /api/auth/register
/**
 * @route POST /
 * @desc register endpoint
 * @access public
 */

router.post("/register", authController.authRegister)

/**
 * @route   POST /api/auth/login
 * @desc    login endpoint
 * @access  private
 */
router.post("/login", authController.authLogin)

module.exports = router