import axios from 'axios';
import { config } from '../../env.config.js';

const API_URL = config.API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const adminApi = {
  // Auth
  auth: {
    login: (credentials) => api.post('/auth/login', credentials),
    logout: () => api.post('/auth/logout'),
    getProfile: () => api.get('/users/profile'),
  },

  // Users
  users: {
    getAll: () => api.get('/users'),
    getById: (id) => api.get(`/users/${id}`),
    create: (data) => api.post('/users', data),
    update: (id, data) => api.put(`/users/${id}`, data),
    updateStatus: (id, isActive) => api.put(`/users/${id}/status`, { isActive }),
    delete: (id) => api.delete(`/users/${id}`)
  },

  // Products
  products: {
    getAll: () => api.get('/products'),
    getById: (id) => api.get(`/products/${id}`),
    create: (formData) => {
      const token = localStorage.getItem('adminToken');
      return api.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
    },
    update: (id, formData) => {
      const token = localStorage.getItem('adminToken');
      return api.put(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
    },
    delete: (id) => api.delete(`/products/${id}`),
  },

  // Orders
  orders: {
    getAll: () => api.get('/orders/admin/all'),
    getById: (id) => api.get(`/orders/admin/${id}`),
    updateStatus: (id, status) => api.put(`/orders/admin/status/${id}`, { status }),
  },

  // Subscriptions
  subscriptions: {
    getAll: () => api.get('/subscriptions'),
    getById: (id) => api.get(`/subscriptions/${id}`),
    updateStatus: (id, status) => api.put(`/subscriptions/${id}/status`, { status }),
    cancel: (id) => api.post(`/subscriptions/${id}/cancel`),
    pause: (id) => api.post(`/subscriptions/${id}/pause`),
    resume: (id) => api.post(`/subscriptions/${id}/resume`),
  },

Dashboard:{
  getAll:() =>api.get('/api/dashboard/stats'),

},

};

export default adminApi; 