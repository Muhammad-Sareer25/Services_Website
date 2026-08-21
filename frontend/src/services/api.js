import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach JWT token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ct_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global handling of expired/invalid sessions
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Let calling code decide how to react (e.g. AuthContext listens for this)
      window.dispatchEvent(new CustomEvent('zc-auth-expired'));
    }
    return Promise.reject(error);
  }
);

export default api;

export const getErrorMessage = (error) => {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.message === 'Network Error') {
    return 'Unable to reach the server. Please check your connection and try again.';
  }
  return 'Something went wrong. Please try again.';
};
