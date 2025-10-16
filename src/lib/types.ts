export type TrackingEvent = {
  date: string;
  time: string;
  status: string;
  location: string;
};

export type Order = {
  id: string;
  trackingNumber: string;
  productName: string;
  productImage: string;
  estimatedDelivery: string;
  status: 'Delivered' | 'Out for Delivery' | 'Shipped' | 'Ordered';
  shippedTo: string;
  trackingHistory: TrackingEvent[];
};
