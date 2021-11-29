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



// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client_check/build"));

//     app.get('/*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'client_check/build/index.html'), function(err) {
//           if (err) {
//             res.status(500).send(err)
//           }
//         })
//       })
// }





app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
    })


