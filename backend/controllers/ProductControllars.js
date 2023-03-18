const Product=require('../Models/ProductModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError=require('../middleware/catchAsyncError');


const createProduct=catchAsyncError( async(req,res,next)=>{

    const product= await Product.create(req.body);

    res.status(201).json({success:"true",product});


});
// -> update the product  details - admin
const updateProduct = catchAsyncError( async(req, res, next)=>{
        
        let product=await Product.findById(req.params.id);


        if(!product){
            return next(new ErrorHandler( "Product not found",404));
            
        }

       product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
       }
       )
        
       return  res.status(200).json({success:"true",message:"updated the product",product});
    
    

});


const deleteProduct= catchAsyncError(async(req,res,next)=>{

  
      const product= await Product.findByIdAndDelete(req.params.id);
       
      if(!product){
        return next(new ErrorHandler( "Product not found",404));
      }
        
        res.status(200).json({success:"true",message:"Successfully Deleted the product"});
   
    
    

})


const searchProduct = catchAsyncError( async(req,res,next)=>{

   const products=await Product.findById(req.params.id);
   if(!products){
    return next(new ErrorHandler( "Product not found",404));
   }

   res.status(201).json({success:"true",message:"Successfully founded the product",products});
    


});



const   getAllProducts=catchAsyncError(async(req,res,next)=>{
   const product =await Product.find({});
   
    res.status(200).json({message:"All products are here",product})
})



module.exports={getAllProducts,createProduct,searchProduct,updateProduct,deleteProduct};