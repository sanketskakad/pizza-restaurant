import { CartInterface } from './Cart';

export default interface UserInterface {
  _id?: string;
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
  orders: string[];
}
