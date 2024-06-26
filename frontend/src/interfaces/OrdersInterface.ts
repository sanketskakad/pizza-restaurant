import ProductInterface from './ProductInterfaces';

export default interface OrderInterface {
  _id?: string;
  uid: string;
  total: number;
  tax: number;
  finalTotal: number;
  paid: boolean;
  items: ProductInterface[];
}
