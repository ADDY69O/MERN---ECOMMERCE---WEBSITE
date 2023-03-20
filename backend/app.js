const express =require('express');
const app=express();
const errorMiddleware=require('./middleware/error')
app.use(express.json());



const product=require('../backend/routes/productRoutes');
const user=require('../backend/routes/userRoutes');
app.use("/api/v1",product);
app.use("/api/v2",user);
app.use(errorMiddleware);

// app.use(require('../backend/routes/productRoutes'))
module.exports= app;


