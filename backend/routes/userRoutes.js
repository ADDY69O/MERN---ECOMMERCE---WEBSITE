const express = require('express');
const {Router}=require('express')


const{registerUser}=require('../controllers/UserControllers');

const router = express.Router();


router.route('/new').post(registerUser);


module.exports=router;

