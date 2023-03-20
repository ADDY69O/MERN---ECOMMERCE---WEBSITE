const Errorhandler=require('../utils/errorhandler');
const catchAsyncError=require('../middleware/catchAsyncError');
const User = require('../Models/UserModals');


//register a user
exports.registerUser= catchAsyncError(async(req,res)=>{
    const {name,password,email}=req.body;
    // if(!user || !password || !email){
    //     return new Errorhandler("Enter the ")
    // }

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"This is public id",
            url:"ProfileUrl"
        }
    })

    res.status(200).json({success:true,message:"resitered Successfully",user})


    
})

