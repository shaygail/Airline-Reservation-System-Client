import api from './common';

export const registerUser = (payload) => api.post(`/register`, payload);
export const loginUser = (payload) => api.post(`/login`, payload);
export const getAllUsers = () => api.get(`/users`);
export const getUserById = (id) => api.get(`/user/${id}`);
export const getUserByEmail = (email) => api.get(`/user/email/${email}`);
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUserById = (id) => api.delete(`/user/${id}`);
