const express = require('express')
const app = express()
require('dotenv').config({path:'./.env'})
const connect = require('./db')
const port = process.env.PORT ;
const UserRoutes = require('./routes/userRoutes.js')
connect()
app.use(express.json())

app.use('/api',UserRoutes)
app.listen(5000,()=>{
    console.log(`server running ${port}`)
})