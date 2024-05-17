const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

//Contact routes call
const profileRoutes = require('./src/routes/profile');
const dbConnection = require('./src/database/connection')


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Set CORS
var cors = require('cors')
app.use(cors())

//SET CORS/HEADERS
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*")
     res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With,Content-Type,Accept,Authorization"
     )
     res.header("Access-Control-Allow-Methods",
          "GET,POST,PUT,PATCH,DELETE")
     if (req.method == "OPTIONS") {
          res.header("Access-Control-Allow-Methods", "*")
          res.header("Access-Control-Allow-Credentials:true")
          return res.status(200).json({})
     }
     next()
})

//Temporary Message
app.get('/', (req, res) => {
     res.json({
          massage:"School API Docs"
     })
})
// All routes goes here
// Routes which should handle requests
app.use("/api/v1/profile", profileRoutes);
// URL not found 404
app.use((req, res, next) => {
     const error = new Error('Not Found')
     error.status = 404
     next(error)
})

// error occured 500
app.use((error, req, res, next) => {
     console.log(error);
     res.status(error.status || 500)
     res.json({
          error: {
               message:error.message
          }
     })
})
module.exports = app
