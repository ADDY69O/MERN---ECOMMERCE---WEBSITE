const Product=require('../Models/ProductModel');
const ErrorHandler = require('../utils/ErrorHandler');

const createProduct=async(req,res,next)=>{

    const product= await Product.create(req.body);

    res.status(201).json({success:"true",product});


}
// -> update the product  details - admin
const updateProduct = async(req, res, next)=>{
        
        let product=await Product.findById(req.params.id);


        if(!product){
            return  res.status(500).json({success:"false",message:"Product not found"});
            
        }
        else{
       product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
       });
        
       return  res.status(200).json({success:"true",message:"updated the product",product});
    }
    

}


const deleteProduct= async(req,res,next)=>{

  try{
       await Product.findByIdAndDelete(req.params.id);
       
        
        res.status(200).json({success:"true",message:"Successfully Deleted the product"});
    }catch{
        res.status(500).json({success:"false",message:"Product not found"});
    }
    

}


const searchProduct = async(req,res,next)=>{
    try{
    const product=await Product.findById(req.params.id);
     


     res.status(200).json({success:"true",message:"found the product",product});
}catch{
    return next(new ErrorHandler("product not found",500));

}


}



const   getAllProducts=async(req,res,next)=>{
   const product =await Product.find({});
   
    res.status(200).json({message:"All products are here",product})
}



module.exports={getAllProducts,createProduct,searchProduct,updateProduct,deleteProduct};