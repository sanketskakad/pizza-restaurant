import ProductInterface from './ProductInterfaces';

export interface CartInterface {
  total: number;
  tax: number;
  finalTotal: number;
  items: ProductInterface[];
}
