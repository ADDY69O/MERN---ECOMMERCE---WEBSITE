const mongoose =require('mongoose');
const LINK=process.env.MONGOURL;

mongoose.connect(LINK,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Database Connected")).catch((err)=>console.log(`db connection failed due to ${err}`));



