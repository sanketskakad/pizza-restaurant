import { Menu, Order } from '@/interfaces';
export interface Users {
  _id?: string;
  name?: string;
  email: string;
  imageUrl?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  phone?: string;
  admin?: boolean;
  password?: string;
  cart?: CartMenu[];
  orders?: Order[];
}

export interface CartMenu extends Menu {
  quantity: number;
}
