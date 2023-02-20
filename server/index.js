const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const noteRoutes = require('../server/Routes/noteRoutes')
const userRoutes = require('../server/Routes/userRoutes')

require('dotenv').config()
mongoose.set("strictQuery", false);
const app = express()
const port = process.env.port || 9000;
let server;

app.use(cors())
app.use(bodyparser.urlencoded({extended: true,limit: '20mb'}))
app.use(bodyparser.json({limit:'20mb'}))

app.use('/api/notes/', noteRoutes)
app.use('/api/user/', userRoutes)

mongoose.connect(process.env.DB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("connection established"))
.catch(()=>console.log("error connecting to the database"))

server = app.listen(port,()=>{
    console.log(`node server running on : ${port}`)
})