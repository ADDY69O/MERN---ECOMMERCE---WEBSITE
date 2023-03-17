const mongoose =require('mongoose');

const connectDatabase=()=>{
mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Database Connected")).catch((err)=>console.log(`db connection failed due to ${err}`));
}


module.exports=connectDatabase;