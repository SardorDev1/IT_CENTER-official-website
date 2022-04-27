const express = require('express')
const app = express()
require('dotenv').config()
const cors = require("cors")
app.use(cors())
const fs = require('fs')
const port = process.env.PORT || 5000;

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req,res)=>{
   fs.readFile('data.json',(e ,data) =>{
       if(e) {
           res.status(500).end()
       }
       else{
res.render('index',  {
    data: JSON.parse(data),
});
       }
   })
} ) 


app.get('/eng', (req,res)=>{
    fs.readFile('data.json',(e , data) =>{
        if(e) {
            res.status(500).end()
        }
        else{
 res.render('eng',  {
     data: JSON.parse(data),
 });
        }   
    })
 } ) 

 app.get('/rus', (req,res)=>{
    fs.readFile('data.json',(e, data) =>{
        if(e) {
            res.status(500).end()
        }
        else{
 res.render('rus',  {
     data: JSON.parse(data),
 });
        }
    })
 } ) 




app.listen(port , ()=>{
    console.log("Server has started in port 5000");
})