const express = require("express");
const app = express();

// require("dotenv").config()


app.get('/api/getapi', (req, res)=>{
    res.send({message:"node js diployement"})
})

app.get('/api/get_user', (req, res)=>{
    res.send({message:"hello aws diployement"})
})
app.get('/api/get_employe',(req, res)=>{
    res.send({
        user:{
            name:"muskan",
            city:"sagar"
        }
    })
})

app.listen(9000, ()=>{
    console.log('serevre is runningn on server')
})