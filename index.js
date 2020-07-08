const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config') 

//connect to db

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology:true, useNewUrlParser:true},()=>{
  console.log('connected to db')
})



//import routes

const authRoute = require('./routes/auth')

//middleware

app.use(bodyParser.json())//this will parse JSON content

//route middlewares

app.use('/api/user',authRoute)




app.listen(3000,()=>{
  console.log('The server is running on port 3000')
})
