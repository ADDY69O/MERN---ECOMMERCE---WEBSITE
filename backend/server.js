const app =require('../backend/app');







const PORT=process.env.PORT;

app.listen(PORT,(req,res)=>{
    console.log(`Connected on port ${PORT}` );
})