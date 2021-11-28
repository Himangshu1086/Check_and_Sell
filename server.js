const dotenv = require("dotenv")
const express = require("express");
const app = express();
const path = require('path');
dotenv.config({path:"./config.env"});



const PORT = process.env.PORT || 5000 ;
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// link the router files 

app.get('/' , async(req, res)=>{
    res.status(200).send("Server is running well ")
} )




app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
    })


