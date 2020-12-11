//mongodb+srv://dbUser:<password>@cluster0.pzhu2.mongodb.net/<dbname>?retryWrites=true&w=majority

const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("successfully connected to db")
    } catch (err) {
        console.log("error connecting db", err)
    }
}
module.exports = connectDB;
