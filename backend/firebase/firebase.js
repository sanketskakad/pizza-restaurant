const admin = require('firebase-admin');
const serviceAccount = require('./firebase-config');
require('dotenv').config();

console.log('serviceAccount', serviceAccount);

admin.initializeApp(serviceAccount);
console.log(process.env.FIREBASE_ADMIN);

module.exports = admin;
