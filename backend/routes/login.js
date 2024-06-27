const express = require('express');
const router = express.Router();
const { UserInfo } = require('../schema/UsersSchema');
const validateToken = require('./../services/validateToken');

router.post('/login', async (req, res, next) => {
  const uid = req.body.uid;
  try {
    console.log('uid', uid);
    const user = await UserInfo.findOne({ uid });
    console.log(user);
    return res.send(user);
  } catch (e) {
    console.log(e);
    return res.send(null);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const user = await UserInfo.create({ ...req.body, cart: [], order: [] });
    console.log(user);
    res.send(user);
  } catch (e) {
    console.log(e);
    res.send(null);
  }
});

module.exports = router;
