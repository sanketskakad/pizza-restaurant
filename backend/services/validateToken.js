const firebaseAdmin = require('../firebase/firebase');
module.exports = async (req, res, next) => {
  let token = null;
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  } else {
    token = req.headers.authorization.split(' ').pop();
    console.log('token', token);
  }
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    console.log('decodedToken', decodedToken);
    req.decodedToken = decodedToken;
    return next();
  } catch (error) {
    console.log('error unauth', error);
    return res.status(401).send('Unauthorized');
  }
};
