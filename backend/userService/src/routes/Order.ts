import express from 'express';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';
import { OrderModel } from '../schema/Orders.schema';

const router = express.Router();

router.post('/', async (req: AdminRequestInterface, res) => {
  const uid = req.decodedToken?.uid;
  if (!uid) {
    return res.status(401).send('Unauthorized');
  }
  const user = await UserModel.findOne({ uid });
  if (!user) {
    return res.status(400).send('Not found');
  }

  const newOrder = {
    uid,
    total: user.cart.total,
    tax: user.cart.tax,
    finalTotal: user.cart.finalTotal,
    paid: req.body.paid,
    items: user.cart.items,
  };
  const updatedOrder = await OrderModel.create(newOrder);
  user.orders.push(updatedOrder._id);
  user.cart = { total: 0, tax: 0, finalTotal: 0, items: [] };
  const updatedUser = await UserModel.findOneAndUpdate({ uid }, user, {
    new: true,
  });
  res.send(updatedUser);
});

export default router;
