const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const menus = require('./routes/menus');
const orders = require('./routes/orders');
const users = require('./routes/users');
const app = express();
const mongoUrl =
  'mongodb+srv://user:super12345@demoprojects.x5nbunv.mongodb.net/?retryWrites=true&w=majority&appName=demoprojects';
mongoose.connect(mongoUrl);

app.use(express.json());
app.use('/api/menus', menus);
app.use('/api/orders', orders);
app.use('/api/users', users);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports.handler = serverless(app);
