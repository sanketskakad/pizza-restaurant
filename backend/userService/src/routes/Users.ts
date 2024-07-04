import express from 'express';
import { UserModel } from '../schema/User.schema';
import { AdminRequestInterface } from '../interfaces/Common';

const router = express.Router();

router.get('/:id', async (req: AdminRequestInterface, res, next) => {
  const id = req.params.id;
  const uid = req.decodedToken?.uid;
  const user = await UserModel.findOne({ uid });
  const body = req.body;
  if (uid === id || user?.admin) {
    const users = await UserModel.findOne({ uid: id });
    res.send(users);
  } else {
    return res.status(401).send('Unauthorized');
  }
});

router.put('/', async (req: AdminRequestInterface, res, next) => {
  const body = req.body;
  const uid = req.decodedToken?.uid;
  const user = await UserModel.findOne({ uid });
  if (uid === body.uid || user?.admin) {
    const users = await UserModel.findOneAndUpdate({ uid: user?.uid }, body, {
      new: true,
    });
    res.send(users);
  } else {
    console.log('here');
    return res.status(401).send('Unauthorized');
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  await UserModel.deleteOne({ _id: id });
  const users = await UserModel.find();
  res.send(users);
});

export default router;
