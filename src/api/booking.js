import api from './common';

export const insertBooking = (payload) => api.post(`/booking`, payload);
export const getAllBookings = () => api.get(`/bookings`);
export const getBookingById = (id) => api.get(`/booking/${id}`);
export const updateBookingById = (id, payload) =>
	api.put(`/booking/${id}`, payload);
export const deleteBookingById = (id) => api.delete(`/booking/${id}`);
