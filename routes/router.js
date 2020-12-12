const express = require("express")

const router = express.Router()
const authRouter = require("./authRouter")
const profileRouter = require("./profileRouter")
const bookRouter = require("./bookRouter")



// Only api endpoint
/**
 * @route /api/auth
 * @desc route for auth
 */
router.use("/auth", authRouter)

/**
 * @route /api/profile
 * @desc route for profile
 */
router.use("/profile", profileRouter)


/**
 * @route /api/book
 * @desc route for book
 */
// router.use("/book", bookRouter)




module.exports = router;