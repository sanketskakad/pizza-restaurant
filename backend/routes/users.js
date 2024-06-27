const express = require('express');
const router = express.Router();
const { UserInfo } = require('../schema/UsersSchema');
const validateToken = require('./../services/validateToken');

router.put('/', validateToken, async (req, res, next) => {
  const uid = req.body._id;
  const body = req.body;
  console.log('req.body', req.body);
  const user = await UserInfo.findOneAndUpdate({ uid }, body, {
    new: true,
  });
  console.log('user', user);
  res.send(user);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await UserInfo.deleteOne({ _id: id });
  const users = await UserInfo.find();
  res.send(users);
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const users = await UserInfo.findOne({ _id: id });
  res.send(users);
});

module.exports = router;
