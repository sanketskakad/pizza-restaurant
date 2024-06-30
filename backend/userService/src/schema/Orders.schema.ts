import { model, Schema } from 'mongoose';
import OrderInterface from '../interfaces/Order';

const OrderSchema = new Schema<OrderInterface>(
  {
    uid: { type: String },
    total: { type: Number },
    tax: { type: Number },
    finalTotal: { type: Number },
    paid: { type: Boolean },
    items: { type: Schema.Types.Mixed, default: [] },
  },
  { timestamps: true }
);

export const OrderModel = model('Order', OrderSchema);
