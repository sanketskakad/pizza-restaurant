const express = require('express');
const serverless = require('serverless-http');
const menus = require('./routes/menus');
const app = express();

app.use(express.json());
app.use('/api/menus', menus);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports.handler = serverless(app);
