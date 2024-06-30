import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import validateToken from './services/validateToken';
import Products from './routes/Products';
import Login from './routes/Login';
import Register from './routes/Register';
import Order from './routes/Order';
import Cart from './routes/Cart';
import User from './routes/Users';

const app = express();

const mongoUrl = `mongodb+srv://${process.env.MONGODB_LOGIN}@demoprojects.x5nbunv.mongodb.net/?retryWrites=true&w=majority&appName=demoprojects`;

mongoose.connect(mongoUrl);

app.use(express.json());

app.use('/api/users/products/', Products);
app.use('/api/users/login/', validateToken, Login);
app.use('/api/users/register/', validateToken, Register);
app.use('/api/users/cart/', validateToken, Cart);
app.use('/api/users/user/', validateToken, User);
app.use('/api/users/order/', validateToken, Order);

export const handler = serverless(app);
