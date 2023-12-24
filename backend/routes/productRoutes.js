import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js"; 

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

/*
router.get('/',asyncHandler(async(req,res)=>{
    // const products = await Product.findById(req.params.id);
    const products = await Product.find({});
    res.json(products);
 }));
 
router.get('/:id',asyncHandler(async(req,res)=>{
//  const product = products.find((p) => p._id === req.params.id);
  const product = await Product.findById(req.params.id);
   
  if(product){
     return res.json(product);
  }else {
    res.status(404);
    throw new Error ('Resource not found');
  }
 }));
 */

export default router;