// create a mongo db connection
// start the mongo db server connection

const mongoose = require('mongoose')
require('dotenv').config()
const { MONGO_URI } = process.env

const connectDB = () => {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(()=>{
        console.log("Mongo connected")
    }).catch((err)=>{console.log(err.message)
    process.exit(1)
    })
}


module.exports = connectDB
