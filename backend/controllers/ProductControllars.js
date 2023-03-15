const   getAllProducts=(req,res)=>{
    res.status(200).json({message:"All products are here"})
}



module.exports={getAllProducts};