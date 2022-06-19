import api from './common';

export const insertAdmin = (payload) => api.post(`/admin`, payload);
export const getAllAdmins = () => api.get(`/admins`);
export const getAdminById = (id) => api.get(`/admin/${id}`);
export const isAdmin = (user_id) => api.get(`/admin/user/${user_id}`);
export const updateAdminById = (id, payload) =>
	api.put(`/admin/${id}`, payload);
export const deleteAdminById = (id) => api.delete(`/admin/${id}`);
