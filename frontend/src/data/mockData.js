export const categories = [
  { id: 'c1', name: 'Pizza', icon: '🍕' },
  { id: 'c2', name: 'Burgers', icon: '🍔' },
  { id: 'c3', name: 'Desserts', icon: '🍰' },
  { id: 'c4', name: 'Drinks', icon: '🥤' }
];

export const restaurants = [
  {
    id: 'r1',
    name: 'Orange Oven',
    rating: 4.8,
    deliveryTime: '20-30 min',
    tags: ['Pizza', 'Italian']
  },
  {
    id: 'r2',
    name: 'Sunset Grill',
    rating: 4.6,
    deliveryTime: '15-25 min',
    tags: ['Burgers', 'Fries']
  }
];

export const foods = [
  {
    id: 'f1',
    restaurantId: 'r1',
    categoryId: 'c1',
    name: 'Spicy Pepperoni Pizza',
    price: 15.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1548365328-8b849e8f6d2f?auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 'f2',
    restaurantId: 'r2',
    categoryId: 'c2',
    name: 'Smash Beef Burger',
    price: 12.5,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=60'
  }
];

export const orders = [
  {
    id: 'o101',
    items: ['Spicy Pepperoni Pizza'],
    total: 18.49,
    status: 'Preparing',
    eta: '18 min'
  },
  {
    id: 'o102',
    items: ['Smash Beef Burger', 'Fries'],
    total: 16.2,
    status: 'Delivered',
    eta: 'Completed'
  }
];

export const notifications = [
  { id: 'n1', title: 'Your order is on the way!', time: '2 min ago' },
  { id: 'n2', title: '30% off on all desserts tonight', time: '1 hr ago' }
];
