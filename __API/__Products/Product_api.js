const express = require('express')
const router = express.Router();

const Product = require('../../__Database/__Model/Product')


// POST THE PRODUCTS
router.post("/addProduct" , async(req, res)=>{
    try{

        const { productName , MRP , DiscountPrice , availableQuantity , description , yearOfUsed  } =  req.body;

        if(!productName || !MRP || !DiscountPrice  ||  !availableQuantity || !description ||!yearOfUsed)
        {
            return res.status(422).json({error:"plz fill the details"})
        }
        const items = new Product({
            productName , MRP , DiscountPrice , availableQuantity , description , yearOfUsed,
        });
        await items.save();
        res.status(201).json({message:'product added successfully'});


    }
    catch(err){
        console.log(err);
    }
} )



//GET REQUEST FOR PRODUCTS 
router.get("/getProduct" , async(req , res)=>{

    const product = await Product.find()
    res.status(200).json(product);
    
})



//GET PRODUCT DETAIL OF A PARTICULAR PRODUCT
router.get('/productDesp' , async(req , res)=>{

    const ids  = req.headers.id;
     try{
         const product = await Product.findById({_id:ids});
         return res.status(200).json(product);
     }catch(err)
     {
         res.status(422).json({error:"product not found !"});
         console.log(err);
     }
 })





module.exports = router;