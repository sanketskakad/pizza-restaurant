import firebaseAdmin from '../firebase/firebase';
import { AdminRequestInterface } from '../interfaces/Common';
import { Response } from 'express';

export default async (req: AdminRequestInterface, res: Response, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  const token = req.headers.authorization.split(' ').pop();
  if (token == undefined || token == '') {
    return res.status(401).send('Unauthorized');
  }
  console.log('token', token);
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    console.log('decodedToken', decodedToken);
    req.decodedToken = decodedToken;
    next();
  } catch (error) {
    console.log('error unauth', error);
    return res.status(401).send('Unauthorized');
  }
};
