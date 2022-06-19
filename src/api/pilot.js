import api from './common';

export const insertPilot = (payload) => api.post(`/pilot`, payload);
export const getAllPilots = () => api.get(`/pilots`);
export const getPilotById = (id) => api.get(`/pilot/${id}`);
export const updatePilotById = (id, payload) =>
	api.put(`/pilot/${id}`, payload);
export const deletePilotById = (id) => api.delete(`/pilot/${id}`);
