import api from './common';

export const insertAirplane = (payload) => api.post(`/airplane`, payload);
export const getAllAirplanes = () => api.get(`/airplanes`);
export const getAirplaneById = (id) => api.get(`/airplane/${id}`);
export const updateAirplaneById = (id, payload) =>
	api.put(`/airplane/${id}`, payload);
export const deleteAirplaneById = (id) => api.delete(`/airplane/${id}`);
