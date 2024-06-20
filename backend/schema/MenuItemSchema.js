const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemSchema = new Schema(
  {
    imageUrl: { type: String },
    itemName: { type: String },
    description: { type: String },
    category: { type: String },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
  },
  { timestamps: true }
);

module.exports.MenuItem = model('MenuItem', MenuItemSchema);
