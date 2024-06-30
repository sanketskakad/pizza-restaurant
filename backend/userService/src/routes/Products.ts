import express from 'express';
import { ProductModel } from '../schema/Product.schema';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.find();
  res.send(products);
});

export default router;
