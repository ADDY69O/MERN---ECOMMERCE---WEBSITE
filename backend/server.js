const app =require('../backend/app');
const dotenv=require('dotenv');
const connectDatabase=require('../backend/connection/db');

//config
dotenv.config({path:"./config.env"});


// Connecting to database
connectDatabase()







app.listen(process.env.PORT,(req,res)=>{
    console.log(`Connected on http://localhost:${process.env.PORT}/` );
})