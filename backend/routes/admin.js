const express = require('express');
const router = express.Router();
const { UserInfo } = require('../schema/UsersSchema');

router.get('/', async (req, res, next) => {
  const users = await UserInfo.find({});
  console.log('users', users);
  res.send(users);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await UserInfo.deleteOne({ _id: id });
  const users = await UserInfo.find();
  res.send(users);
});

router.put('/', async (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  const user = await UserInfo.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(user);
});

module.exports = router;
