import api from './common';

export const insertPassenger = (payload) => api.post(`/passenger`, payload);
export const getAllPassengers = () => api.get(`/passengers`);
export const getPassengerById = (id) => api.get(`/passenger/${id}`);
export const updatePassengerById = (id, payload) =>
	api.put(`/passenger/${id}`, payload);
export const deletePassengerById = (id) => api.delete(`/passenger/${id}`);
