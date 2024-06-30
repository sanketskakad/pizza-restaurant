import express from 'express';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const users = await UserModel.findOne({ _id: id });
  res.send(users);
});

router.put('/', async (req: AdminRequestInterface, res, next) => {
  const body = req.body;
  const uid = req.decodedToken?.uid;
  if (uid !== body.uid) {
    return res.status(401).send('Unauthorized');
  }
  const users = await UserModel.findOneAndUpdate({ uid: uid }, body, {
    new: true,
  });
  res.send(users);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id });
  const users = await UserModel.find();
  res.send(users);
});

export default router;
