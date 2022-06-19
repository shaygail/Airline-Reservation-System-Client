import api from './common';

export const insertFlight = (payload) => api.post(`/flight`, payload);
export const getAllFlights = () => api.get(`/flights`);
export const getFlightById = (id) => api.get(`/flight/${id}`);
export const updateFlightById = (id, payload) =>
	api.put(`/flight/${id}`, payload);
export const deleteFlightById = (id) => api.delete(`/flight/${id}`);
