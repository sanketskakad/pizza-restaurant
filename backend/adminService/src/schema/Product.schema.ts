import { Schema, Types, model } from 'mongoose';
import ProductInterface from '../interfaces/Product';

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const ProductSchema = new Schema<ProductInterface>(
  {
    imageUrl: { type: String },
    itemName: { type: String },
    description: { type: String },
    category: { type: String },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredients: { type: [ExtraPriceSchema] },
  },
  { timestamps: true }
);

export const ProductModel = model('Product', ProductSchema);
