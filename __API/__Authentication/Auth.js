
const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');

require('../../__Database/__InitDB/initDB')
const Admin = require('../../__Database/__Model/SignUp/Sign__UpSchema')


router.use(cookieParser());



// Sign up 

router.post('/signUp', async(req , res)=>{

    const {rollNumber , password , conformPass } = req.body;

    if (!rollNumber ||  !password || !conformPass )
    {
        return res.status(422).json({error:"plz fill the details"})
    }

   try{
       const userExist = await Admin.findOne({rollNumber});
       if(userExist){
           return res.status(422).json({err:"user exits already"})
       }
       else if(password != conformPass){

           return res.status(422).json({error:"password not matched"})
       }
       else{
            const admin = new Admin({ rollNumber , password , conformPass})
            await admin.save();
            res.status(200).json({ message:"user registered successfully" })
       }
   }catch (err){
       console.log(err)
   }
})




//login in route

router.post("/signIn" , async (req , res ) => {

    try{

        const { rollNumber , password } = req.body;

        if( !rollNumber || !password){
            return res.status(200).json({error:" plz fille the fields"})
        }

        const userLogin = await Admin.findOne({rollNumber});
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password);

        if(isMatch)
               {
                const token = jwt.sign({_id :userLogin._id} , process.env.JWT_SECRET_KEY , {
                    expiresIn:"30d"
                });

                res.cookie("token" ,token ,{ secure: true });
                res.status(200).json({token})
                console.log(token)
               }  
        else
        {
            res.status(401).json({error:"user error"});
        }
           
    }
    else
    {
        
        res.status(401).json({message:"invalid Credentials"})
    }
    }catch(err){
        console.log(err)
    }
})






// request to get logged in admin 
router.get("/userLoggedIn"  , async ( req  , res ) =>{
    try{
        const userTokens = req.cookies.token;
        //const userTokens = req.headers.Loggedtoken; 

        console.log(`the cookie req ${userTokens}`);
        // const ab = jwt.decode(userTokens);
        // console.log(ab)
        const verifyToken = jwt.verify(userTokens , process.env.JWT_SECRET_KEY);
        console.log(`user : ${verifyToken}`);

        const user = await Admin.findById({_id: verifyToken._id});
        res.status(200).json({user});
        console.log(user)

    }catch(err){
        res.status(401).send("Unauthorised")
        console.log(err);
    }
    
})








module.exports = router