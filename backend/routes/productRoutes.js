const { Router } = require('express');
const express=require('express');
const {getAllProducts,createProduct,searchProduct,updateProduct,deleteProduct}=require('../controllers/ProductControllars');

const router=express.Router();
router.route('/products/:id').get(searchProduct);
router.route('/products/new').post(createProduct);
router.route("/products").get(getAllProducts);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteProduct);


module.exports=router;
