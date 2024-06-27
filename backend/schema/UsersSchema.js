const { model, Schema } = require('mongoose');

const UserInfoSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    uid: { type: String, required: true, unique: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    password: { type: String },
    imageUrl: { type: String },
    admin: { type: Boolean, default: false },
    cart: { type: Array, default: [] },
    orders: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports.UserInfo = model('UserInfo', UserInfoSchema);
