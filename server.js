const express = require("express");
const app = express();

// require("dotenv").config()


app.get('/api/getapi', (req, res)=>{
    res.send({message:"node js diployement"})
})


app.listen(9000, ()=>{
    console.log('serevre is runningn on server')
})