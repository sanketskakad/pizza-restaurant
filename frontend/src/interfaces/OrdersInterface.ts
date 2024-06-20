export interface Order {
  _id?: string;
  userEmail: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  paid: boolean;
  date: string;
}
