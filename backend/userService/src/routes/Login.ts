import express from 'express';
import { ProductModel } from '../schema/Product.schema';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';

const router = express.Router();

router.post('/', async (req: AdminRequestInterface, res, next) => {
  try {
    const uid = req.decodedToken?.uid;
    if (!uid) {
      return res.status(401).send('Unauthorized');
    }
    const user = await UserModel.findOne({ uid });
    console.log(user);
    if (!user) {
      return res.status(400).send('Unauthorized');
    }
    return res.send(user);
  } catch (e) {
    console.log(e);
    return res.status(400).send('Not Found');
  }
});

export default router;
