const admin = require('firebase-admin');
let serviceAccount = require('./firebase-config');
require('dotenv').config();
console.log('serviceAccount', serviceAccount);

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
console.log(process.env.FIREBASE_ADMIN);

module.exports = admin;
