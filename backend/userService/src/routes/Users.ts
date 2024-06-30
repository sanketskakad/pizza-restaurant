import express from 'express';
import { UserModel } from '../schema/User.schema';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const users = await UserModel.findOne({ _id: id });
  res.send(users);
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id });
  const users = await UserModel.find();
  res.send(users);
});

export default router;
