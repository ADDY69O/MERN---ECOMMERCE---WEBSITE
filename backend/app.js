const express =require('express');
const app=express();
const errorMiddleware=require('../backend/middleware/Error')
app.use(express.json());



const product=require('../backend/routes/productRoutes');
app.use("/api/v1",product);
app.use(errorMiddleware);

// app.use(require('../backend/routes/productRoutes'))
module.exports= app;


