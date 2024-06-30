import express from 'express';
import { ProductModel } from '../schema/Product.schema';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const products = await ProductModel.findOne({ _id: id });
    res.send(products);
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res, next) => {
  console.log('here');
  await ProductModel.create(req.body);
  const products = await ProductModel.find();
  res.send(products);
});

router.put('/', async (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  await ProductModel.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  const products = await ProductModel.find();
  res.send(products);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await ProductModel.deleteOne({ _id: id });
  const products = await ProductModel.find();
  res.send(products);
});

export default router;
