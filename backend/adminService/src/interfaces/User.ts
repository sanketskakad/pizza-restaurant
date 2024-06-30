import { Types } from 'mongoose';
import { CartInterface } from './Cart';
import OrderInterface from './Order';

export interface UserInterface {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  uid: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  imageUrl: string;
  admin: boolean;
  cart: CartInterface;
  orders: Types.ObjectId[];
}
