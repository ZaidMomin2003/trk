import type { Order } from './types';
import { PlaceHolderImages } from './placeholder-images';

const productImages = {
  product1: PlaceHolderImages.find((img) => img.id === 'product-1')?.imageUrl ?? '',
  product2: PlaceHolderImages.find((img) => img.id === 'product-2')?.imageUrl ?? '',
  product3: PlaceHolderImages.find((img) => img.id === 'product-3')?.imageUrl ?? '',
  product4: PlaceHolderImages.find((img) => img.id === 'product-4')?.imageUrl ?? '',
  product5: PlaceHolderImages.find((img) => img.id === 'product-5')?.imageUrl ?? '',
}

export const orders: Order[] = [
  {
    id: 'Arshad-LLM-2025-2568634512',
    trackingNumber: 'Zaidaws@123456',
    productName: 'AWS SWAG Builder Kit',
    productImage: '/aws.jpeg',
    estimatedDelivery: 'October 26, 2025',
    status: 'Out for Delivery',
    shippedTo: 'Arshad, Muddebihal, Bijapur, Karnataka',
    trackingHistory: [
      { date: 'October 22, 2025', time: '7:15 AM', status: 'Out for Bangalore facility', location: 'Delhi, India' },
      { date: 'October 21, 2025', time: '6:26 AM', status: 'Software and Malware installation', location: 'Delhi, India' },
      { date: 'October 17, 2025', time: '04:38 AM', status: 'Product checking', location: 'Delhi, India' },
      { date: 'October 16, 2025', time: '08:00 PM', status: 'Shipped', location: 'Delhi, India' },
      { date: 'October 16, 2025', time: '11:00 AM', status: 'Package is being prepared', location: 'Delhi, India' },
      { date: 'October 15, 2025', time: '09:00 AM', status: 'Ordered', location: 'Muddebihal, Bijapur, Karnataka' },
    ],
  },
  {
    id: '112-1234567-1234567',
    trackingNumber: 'TBA123456789012',
    productName: 'Modern Wireless Headphones',
    productImage: productImages.product1,
    estimatedDelivery: 'Tuesday, May 28',
    status: 'Delivered',
    shippedTo: 'Jane Doe',
    trackingHistory: [
      { date: 'May 28, 2024', time: '1:30 PM', status: 'Delivered', location: 'Los Angeles, CA' },
      { date: 'May 28, 2024', time: '7:15 AM', status: 'Out for delivery', location: 'Los Angeles, CA' },
      { date: 'May 28, 2024', time: '6:00 AM', status: 'Arrived at delivery station', location: 'AMZN Delivery Station, Los Angeles, CA' },
      { date: 'May 27, 2024', time: '8:00 PM', status: 'Package departed from carrier facility', location: 'San Bernardino, CA' },
      { date: 'May 27, 2024', time: '11:00 AM', status: 'Package arrived at a carrier facility', location: 'San Bernardino, CA' },
      { date: 'May 26, 2024', time: '5:00 PM', status: 'Shipped', location: 'Phoenix, AZ' },
      { date: 'May 26, 2024', time: '2:00 PM', status: 'Ordered', location: 'Phoenix, AZ' },
    ],
  },
  {
    id: '113-9876543-2109876',
    trackingNumber: 'TBA987654321098',
    productName: 'The Art of Design: A Hardcover Book',
    productImage: productImages.product2,
    estimatedDelivery: 'Today, June 3',
    status: 'Out for Delivery',
    shippedTo: 'John Smith',
    trackingHistory: [
      { date: 'June 3, 2024', time: '8:00 AM', status: 'Out for delivery', location: 'New York, NY' },
      { date: 'June 3, 2024', time: '6:30 AM', status: 'Arrived at delivery station', location: 'AMZN Delivery Station, New York, NY' },
      { date: 'June 2, 2024', time: '10:00 PM', status: 'Package departed from carrier facility', location: 'Edison, NJ' },
      { date: 'June 2, 2024', time: '1:00 PM', status: 'Package arrived at a carrier facility', location: 'Edison, NJ' },
      { date: 'June 1, 2024', time: '6:00 PM', status: 'Shipped', location: 'Allentown, PA' },
      { date: 'June 1, 2024', time: '1:00 PM', status: 'Ordered', location: 'Allentown, PA' },
    ],
  },
  {
    id: '114-0000111-2222333',
    trackingNumber: 'TBA000011122233',
    productName: 'Stainless Steel Electric Kettle',
    productImage: productImages.product3,
    estimatedDelivery: 'Wednesday, June 5',
    status: 'Shipped',
    shippedTo: 'Emily White',
    trackingHistory: [
      { date: 'June 2, 2024', time: '9:00 PM', status: 'Shipped', location: 'Reno, NV' },
      { date: 'June 2, 2024', time: '4:00 PM', status: 'Package is being prepared', location: 'Reno, NV' },
      { date: 'June 2, 2024', time: '10:00 AM', status: 'Ordered', location: 'Reno, NV' },
    ],
  },
    {
    id: '115-4444555-6666777',
    trackingNumber: 'TBA444455566677',
    productName: 'Advanced Smart Watch with Black Band',
    productImage: productImages.product4,
    estimatedDelivery: 'Friday, June 7',
    status: 'Ordered',
    shippedTo: 'Michael Brown',
    trackingHistory: [
      { date: 'June 3, 2024', time: '11:00 AM', status: 'Ordered', location: 'Austin, TX' },
    ],
  },
];
