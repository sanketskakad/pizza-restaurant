import { Types } from 'mongoose';

export default interface ProductInterface {
  _id?: Types.ObjectId;
  imageUrl: string;
  itemName: string;
  description: string;
  category: string;
  basePrice: number;
  sizes: {
    name: string;
    price: number;
  }[];
  extraIngredients: {
    name: string;
    price: number;
  }[];
}
