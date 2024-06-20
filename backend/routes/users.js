const express = require('express');
const router = express.Router();
const { User } = require('../schema/UsersSchema');

router.get('/', async (req, res, next) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res, next) => {
  await User.create(req.body);
  const users = await User.find();
  res.send(users);
});

router.put('/', async (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  await User.findOneAndUpdate({ _id: id }, body);
  const users = await User.find();
  res.send(users);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  const users = await User.find();
  res.send(users);
});

module.exports = router;
