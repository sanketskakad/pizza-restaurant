import express from 'express';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';

const router = express.Router();

router.post('/', async (req: AdminRequestInterface, res, next) => {
  try {
    console.log('Here');
    const uid = req.decodedToken?.uid;
    console.log(uid);
    if (!uid) {
      return res.status(401).send('Unauthorized');
    }
    const user = await UserModel.create({
      ...req.body,
      cart: { total: 0, tax: 0, finalTotal: 0, items: [] },
      order: [],
    });
    return res.send(user);
  } catch (e) {
    console.log(e);
    return res.status(400).send('Not found');
  }
});

export default router;
