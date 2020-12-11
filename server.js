const express = require("express")

const app = express();

const router = require("./routes/router")
require("dotenv").config();
const connectDB = require("./models/connectDB")

app.use(express.json())


// Only api endpoint
connectDB()
app.use("/api", router)
app.listen(process.env.PORT, () =>{
    console.log(`I am listening on port ${process.env.PORT}`)
})