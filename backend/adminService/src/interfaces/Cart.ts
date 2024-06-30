import ProductInterface from './Product';

export interface CartInterface {
  total: number;
  tax: number;
  finalTotal: number;
  items: ProductInterface[];
}
