import { Menu } from '@/interfaces';
export interface Users {
  _id: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  admin: false;
  cart: Menu[];
}
