const firebaseAdmin = require('../firebase/firebase');
module.exports = async (req, res, next) => {
  const { token } = req.body;
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    next({ ...req, decodedToken });
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};
