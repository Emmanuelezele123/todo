const express = require('express')
require('dotenv').config()
const app = express()
const {json,urlencoded} = require('express')
const connectDb = require('./db/connect')
const routes = require("./routes/todo");
   
app.use(json()) 
app.use("/todos",routes)
connectDb() 
const port  = process.env.portNumber || 3030
app.listen(port,()=>{
    console.log("App Connected at port "+port)
  })
 