const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const menus = require('./routes/menus');
const orders = require('./routes/orders');
const users = require('./routes/users');
const admin = require('./routes/admin');
const app = express();
const login = require('./routes/login');
require('dotenv').config();
const mongoUrl = `mongodb+srv://${process.env.MONGODB_LOGIN}@demoprojects.x5nbunv.mongodb.net/?retryWrites=true&w=majority&appName=demoprojects`;

console.log('process.env.MONGODB_LOGIN', process.env.private_key_id);

mongoose.connect(mongoUrl);

app.use(express.json());
app.use('/api/menus', menus);
app.use('/api/orders', orders);
app.use('/api/users', login);
// app.use('/api/users', users);
app.use('/api/admin', admin);

module.exports.handler = serverless(app);
