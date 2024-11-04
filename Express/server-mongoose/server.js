const express = require('express')
const app=express()
const port=3000
app.use(express.json())
const db=require('./config/db')
app.get('/',(req,res)=> {
    res.status(200).json("hello");
})
app.listen(Port,(()=>console.log('Listening on: ${Port}'))
)