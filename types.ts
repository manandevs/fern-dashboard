
export type OrderStatus = 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';

export interface Order {
  id: string;
  name: string;
  avatar: string;
  product: string;
  date: string;
  amount: string;
  status: OrderStatus;
}

export interface KPIStat {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: any;
}
