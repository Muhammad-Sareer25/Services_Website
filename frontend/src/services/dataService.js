import api from './api';

// Services
export const fetchServices = () => api.get('/services').then((res) => res.data);
export const fetchServiceById = (id) => api.get(`/services/${id}`).then((res) => res.data);

// Enquiries
export const submitEnquiry = (data) => api.post('/enquiries', data).then((res) => res.data);
export const fetchEnquiries = (params) => api.get('/enquiries', { params }).then((res) => res.data);
export const fetchEnquiryById = (id) => api.get(`/enquiries/${id}`).then((res) => res.data);
export const updateEnquiryStatus = (id, data) => api.put(`/enquiries/${id}`, data).then((res) => res.data);
export const deleteEnquiry = (id) => api.delete(`/enquiries/${id}`).then((res) => res.data);

// Service Requests
export const createServiceRequest = (data) => api.post('/requests', data).then((res) => res.data);
export const fetchRequests = (params) => api.get('/requests', { params }).then((res) => res.data);
export const fetchRequestById = (id) => api.get(`/requests/${id}`).then((res) => res.data);
export const updateServiceRequest = (id, data) => api.put(`/requests/${id}`, data).then((res) => res.data);

// Users (admin)
export const fetchUsers = (params) => api.get('/users', { params }).then((res) => res.data);
export const fetchUserById = (id) => api.get(`/users/${id}`).then((res) => res.data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data).then((res) => res.data);
export const deleteUser = (id) => api.delete(`/users/${id}`).then((res) => res.data);

// Admin stats
export const fetchDashboardStats = () => api.get('/admin/stats').then((res) => res.data);
