import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function createBooking(payload) {
  const { data } = await api.post(ENDPOINTS.BOOKINGS, payload);
  return data;
}

export async function getBooking(id) {
  const { data } = await api.get(ENDPOINTS.BOOKING_DETAIL(id));
  return data;
}

export async function createBookingAPI(payload) {
  const { data } = await api.post(ENDPOINTS.BOOK, payload);
  return data || {};
}

export async function getMyBookingsAPI() {
  const { data } = await api.get(ENDPOINTS.MY_BOOKINGS);
  return data.items || [];
}