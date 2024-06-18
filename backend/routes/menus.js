const express = require('express');
const router = express.Router();

let array = [];

router.get('/', (req, res, next) => {
  res.send(array);
});

router.post('/', (req, res, next) => {
  array.push({ _id: array.length, ...req.body });
  res.send(array);
});

router.put('/', (req, res, next) => {
  const id = req.body._id;
  const body = req.body;
  const newArr = array.map((el) => {
    return id === el._id ? body : el;
  });
  array = newArr;
  res.send(array);
});

router.delete('/', (req, res, next) => {
  const id = req.body._id;
  const newArr = array.filter((el) => {
    return id !== el._id;
  });
  array = newArr;
  res.send(array);
});

module.exports = router;
