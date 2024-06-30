export default interface ProductInterface {
  _id?: string;
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
