const app =require('../backend/app');
const dotenv=require('dotenv');
const connectDatabase=require('../backend/connection/db');


//uncaught promise rejection
process.on("uncaughtException",err=>{
    console.log(`Error : ${err}`);
    process.exit(1);
})

//config
dotenv.config({path:"./config.env"});


// Connecting to database
connectDatabase()







app.listen(process.env.PORT,(req,res)=>{
    console.log(`Connected on http://localhost:${process.env.PORT}/` );
})

//unhandled promise  rejection
process.on("unhandledRejection",err=>{
    console.log(`error : ${err.message}`);
    console.log("Shuting down the server due to unhandled promise rejection");
    
server.close(()=>{
    process.exit(1);
})
})
