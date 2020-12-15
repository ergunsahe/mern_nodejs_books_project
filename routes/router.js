const express = require("express");

const router = express.Router();
const AuthRouter = require("./authRouter");
const ProfileRouter = require("./profileRouter");
const BookRouter = require("./bookRouter");

// Only /api endpoint

/**
 * @route /api/auth
 * @desc Route for Auth
 */
router.use("/auth", AuthRouter);

/**
 * @route /api/profile
 * @desc Route for Profile
 */
router.use("/profile", ProfileRouter);

/**
 * @route /api/book
 * @desc Route for Book
 */
router.use("/books", BookRouter);

module.exports = router;
