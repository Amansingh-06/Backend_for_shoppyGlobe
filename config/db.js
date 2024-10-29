
const mongoose = require('mongoose')

require('dotenv').config(); //for .env file

const connectDb = (req, res) => {
    mongoose.connect(process.env.url)
        .then(() => {
            console.log("Database Connected Successfully")
        })
        .catch(err => {
            console.log("connection failed",err)
        })
} 
    
                

module.exports = connectDb;