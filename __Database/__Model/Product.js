const mongoose = require("mongoose");

const productSchema =  new mongoose.Schema({

    productName:{
        type: String,
        required:true
    },
    MRP:{
        type:Number,
        required:true
    },
    DiscountPrice:{
        type:Number,
        
    },
    availableQuantity:{
        type:Number,
        required:true
    },
    description:{
        type: String,
        required:true
    } ,
    yearOfUsed :{
        type:Number,
        required:true
    },
    image:[
        {
           url:{
                type:String
           }
        }
    ]
        
} ,
{timestamps:true}

)

const Product  = mongoose.model('product' ,productSchema);

module.exports = Product;