const express =require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config({path:"./config.env"});

require('../backend/connection/db')
const product=require('../backend/routes/productRoutes');
app.use("/api/v1",product);
// app.use(require('../backend/routes/productRoutes'))
module.exports= app;


