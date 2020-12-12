
const express = require("express")

const router = express.Router()
// bas url: /api/profile
/**
 * @route Get /api/profile
 * @desc profile endpoint
 * @access private
 * 
 */
router.post("/", (req, res) =>{
    res.send("private profile page")
})

module.exports = router;