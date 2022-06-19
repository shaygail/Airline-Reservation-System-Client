import api from './common';

export const insertAttendant = (payload) => api.post(`/attendant`, payload);
export const getAllAttendants = () => api.get(`/attendants`);
export const getAttendantById = (id) => api.get(`/attendant/${id}`);
export const updateAttendantById = (id, payload) =>
	api.put(`/attendant/${id}`, payload);
export const deleteAttendantById = (id) => api.delete(`/attendant/${id}`);
