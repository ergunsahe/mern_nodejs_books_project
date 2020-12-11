const express = require("express")

const app = express();

const router = require("./routes/router")


// Only api endpoint
app.use("/api", router)
app.listen(5000, () =>{
    console.log("ı am listening")
})