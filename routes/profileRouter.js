
const express = require("express")
const auth = require("../middleware/authMiddleware")

const router = express.Router()
// bas url: /api/profile
/**
 * @route Get /api/profile
 * @desc profile endpoint
 * @access private
 * 
 */
router.post("/", auth, (req, res) =>{
    res.send(req.decodedUser.email)
})

module.exports = router;