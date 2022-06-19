import api from './common';

export const insertAirplaneModel = (payload) =>
	api.post(`/airplane_model`, payload);
export const getAllAirplaneModels = () => api.get(`/airplane_models`);
export const getAirplaneModelById = (id) => api.get(`/airplane_model/${id}`);
export const updateAirplaneModelById = (id, payload) =>
	api.put(`/airplane_model/${id}`, payload);
export const deleteAirplaneModelById = (id) =>
	api.delete(`/airplane_model/${id}`);
