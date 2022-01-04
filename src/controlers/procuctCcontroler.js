const express = require("express")

const {formatErrors} = require("../utils/validation")

const { body, validationResult } = require('express-validator');

const { create } = require("../models/product.model")

const router = express.Router()

const Product = require("../models/product.model");
const { Error } = require("mongoose");

router.get("",async(req,res)=>{
    const products = await Product.find().lean().exec() 
    return res.send(products)
})

router.post("",body("name").isLength({min:3}).withMessage("Name is required mst be at least 3 charecter"),body("price").notEmpty().withMessage("price is required").custom((value)=>{
    if(value<=0){
        throw new Error("plz enter value greatr than zero");
    }
    return true;

}), async(req,res)=>{
   try{
     //console.log(body("name"));
     const errors = validationResult(req);
     if (!errors.isEmpty()){
        
       return res.status(400).json({ errors:formatErrors(errors.array()) });
     }
    const product = await Product.create(req.body) 
    return res.send(product)
   }catch(err){
       console.log(err.message);
   }
})

module.exports = router;