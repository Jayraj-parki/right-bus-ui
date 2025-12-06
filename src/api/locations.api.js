import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getCities() {
  const { data } = await api.get(ENDPOINTS.CITIES);
  return data.items || [];
}
