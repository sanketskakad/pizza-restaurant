import admin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const serviceAccount: ServiceAccount = {
  projectId: process.env.PROJECT_ID || '',
  clientEmail: process.env.CLIENT_EMAIL || '',
  privateKey: process.env.PRIVATE_KEY || '',
};

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
console.log(process.env.FIREBASE_ADMIN);

export default admin;
