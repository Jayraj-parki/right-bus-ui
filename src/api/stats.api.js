import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getStats() {
  const { data } = await api.get(ENDPOINTS.STATS);
  return data || null;
}


export async function getSeatLayout(busId) {
  const { data } = await api.get(ENDPOINTS.SEAT_LAYOUT(busId));
  return data.seats || [];
}