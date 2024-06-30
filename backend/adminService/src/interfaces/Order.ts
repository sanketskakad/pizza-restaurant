import { Types } from 'mongoose';
import ProductInterface from './Product';

export default interface OrderInterface {
  _id?: Types.ObjectId;
  uid: string;
  total: number;
  tax: number;
  finalTotal: number;
  paid: boolean;
  items: ProductInterface[];
}
