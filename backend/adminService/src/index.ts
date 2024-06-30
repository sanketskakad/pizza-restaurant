import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import validateAdminToken from './services/validateAdmin';
import Products from './routes/Products';
import Users from './routes/Users';

const app = express();

const mongoUrl = `mongodb+srv://${process.env.MONGODB_LOGIN}@demoprojects.x5nbunv.mongodb.net/?retryWrites=true&w=majority&appName=demoprojects`;

mongoose.connect(mongoUrl);

app.use(express.json());

app.use(validateAdminToken);

app.use('/api/admin/products/', Products);
app.use('/api/admin/users/', Users);

export const handler = serverless(app);
