import api from './common';

export const insertLocation = (payload) => api.post(`/location`, payload);
export const getAllLocations = () => api.get(`/locations`);
export const getLocationById = (id) => api.get(`/location/${id}`);
export const updateLocationById = (id, payload) =>
	api.put(`/location/${id}`, payload);
export const deleteLocationById = (id) => api.delete(`/location/${id}`);
