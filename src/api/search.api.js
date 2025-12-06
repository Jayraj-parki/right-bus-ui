import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function searchTripsAPI(payload) {
  const { data } = await api.post(ENDPOINTS.SEARCH, payload);
  return data.results || [];
}
