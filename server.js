const dotenv = require("dotenv")
const express = require("express");
const app = express();
const path = require('path');
dotenv.config({path:"./config.env"});

const PORT = process.env.PORT || 5000 ;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./__Database/__InitDB/initDB')






// link the router files 
app.use(require('./__API/__Products/Product_api'))
app.use(require('./__API/__Authentication/Auth'))








app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
    })


