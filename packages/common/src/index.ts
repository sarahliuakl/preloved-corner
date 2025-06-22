// Common types and utilities for Preloved Corner

export interface User {
  id: number;
  email: string;
  username: string;
  fullName?: string;
  phone?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface Item {
  id: number;
  title: string;
  description?: string;
  price: number;
  category?: string;
  condition: 'new' | 'like_new' | 'good' | 'fair' | 'poor';
  status: 'available' | 'sold' | 'reserved';
  images?: string[];
  location?: string;
  ownerId: number;
  createdAt: string;
  updatedAt?: string;
}

export interface Order {
  id: number;
  orderNumber: string;
  buyerId: number;
  sellerId: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress?: string;
  paymentMethod?: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  itemId: number;
  quantity: number;
  price: number;
  createdAt: string;
}

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  subject?: string;
  content: string;
  isRead: boolean;
  messageType: 'general' | 'order_inquiry' | 'support';
  relatedItemId?: number;
  relatedOrderId?: number;
  createdAt: string;
  updatedAt?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Utility functions
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `ORD-${timestamp}-${random}`.toUpperCase();
};