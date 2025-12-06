import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

// Fetch seat layout for a given bus
export async function getSeatLayout(busId) {
  const { data } = await api.get(ENDPOINTS.SEAT_LAYOUT(busId));
  return data.seats || [];
}
