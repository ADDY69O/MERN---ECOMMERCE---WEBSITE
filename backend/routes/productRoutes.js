const { Router } = require('express');
const express=require('express');
const {getAllProducts}=require('../controllers/ProductControllars');

const router=express.Router();


router.route("/products").get(getAllProducts);


module.exports=router;
