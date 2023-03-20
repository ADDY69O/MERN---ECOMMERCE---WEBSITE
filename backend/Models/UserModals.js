const mongoose = require('mongoose');
const validator=require('validator');


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter your name"],
        max:[30,"name cannot exceed more than 30 characters"],
        min:[4,"name cannot less than 4 characters"]
    }
    ,
    email:{
        type:String,
        required:[true,"Please enter your email address"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    }

    ,password:{
        type:String,
        required:[true,"Please enter your password"],
        min:[8,"password cannot less than 8 characters"],
        select:false
       },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user",
        },
     resetPasswordToken:String,
     resetPasswordExpiry:Date,   

});


const user = mongoose.model('User',userSchema);

module.exports=user;






