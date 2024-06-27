import { Users } from '@/interfaces';

export interface Order extends Users {
  _id?: string;
  paid: boolean;
  date: string;
}
