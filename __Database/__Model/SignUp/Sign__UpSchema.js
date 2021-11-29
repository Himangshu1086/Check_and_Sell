const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const adminSchema =  new mongoose.Schema({

  
    rollNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    conformPass:{
        type:String,
        required:true
     }
  
} ,
{timestamps:true}

)


// hash the password 

adminSchema.pre('save' , async function (next) {

    
    if(this.isModified('password'))
    {
        this.password =  await bcrypt.hash(this.password , 12);
        this.conformPass = await bcrypt.hash(this.conformPass ,12)
    }
    next();
});



const Admin  = mongoose.model('admin' ,adminSchema);

module.exports = Admin;
