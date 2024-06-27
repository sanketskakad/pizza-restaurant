const express = require('express');
const router = express.Router();
const { MenuItem } = require('../schema/MenuItemSchema');

router.get('/', async (req, res, next) => {
  const menus = await MenuItem.find();
  console.log(menus);
  res.send(menus);
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const menus = await MenuItem.findOne({ _id: id });
  console.log(menus);
  res.send(menus);
});

router.post('/', async (req, res, next) => {
  await MenuItem.create(req.body);
  const menus = await MenuItem.find();
  res.send(menus);
});

router.put('/', async (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  await MenuItem.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  const menus = await MenuItem.find();
  res.send(menus);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await MenuItem.deleteOne({ _id: id });
  const menus = await MenuItem.find();
  res.send(menus);
});

module.exports = router;
