import { model, Schema } from 'mongoose';
import { UserInterface } from '../interfaces/User';

const UserSchema = new Schema<UserInterface>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    uid: { type: String, required: true, unique: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    imageUrl: { type: String },
    admin: { type: Boolean, default: false },
    cart: {
      type: Schema.Types.Mixed,
      default: { total: 0, tax: 0, finalTotal: 0, items: [] },
    },
    orders: { type: Schema.Types.Mixed, default: [] },
  },
  { timestamps: true }
);

export const UserModel = model('User', UserSchema);
