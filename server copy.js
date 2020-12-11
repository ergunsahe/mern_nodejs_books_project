const express = require("express")

const app = express();

const router = require("./routes/router")
require("dotenv").config();
const connectDB = require("./models/connectDB")


// Only api endpoint
connectDB()
app.use("/api", router)
app.listen(5000, () =>{
    console.log("ı am listening")
})