const express = require('express');
const router = express.Router();
const { OrderItem } = require('../schema/OrderSchema');

router.get('/', async (req, res, next) => {
  const orders = await OrderItem.find();
  res.send(orders);
});

router.post('/', async (req, res, next) => {
  await OrderItem.create(req.body);
  const orders = await OrderItem.find();
  res.send(orders);
});

router.put('/', async (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  await OrderItem.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  const orders = await OrderItem.find();
  res.send(orders);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await OrderItem.deleteOne({ _id: id });
  const orders = await OrderItem.find();
  res.send(orders);
});

module.exports = router;
