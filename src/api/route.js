import api from './common';

export const insertRoute = (payload) => api.post(`/route`, payload);
export const getAllRoutes = () => api.get(`/routes`);
export const getRouteById = (id) => api.get(`/route/${id}`);
export const updateRouteById = (id, payload) =>
	api.put(`/route/${id}`, payload);
export const deleteRouteById = (id) => api.delete(`/route/${id}`);
