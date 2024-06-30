import express from 'express';
import { ProductModel } from '../schema/Product.schema';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';

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
  const body = req.body;
  user?.cart.items.push(body);
  user.cart.total = user?.cart.items.reduce((acc, el) => {
    return acc + el.basePrice;
  }, 0);
  user.cart.tax = Math.ceil(user.cart.total * 0.08);
  user.cart.finalTotal = user.cart.total + user.cart.tax;
  const updatedUser = await UserModel.findOneAndUpdate({ uid }, user, {
    new: true,
  });
  res.send(updatedUser);
});

export default router;
