import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getOperators() {
  const { data } = await api.get(ENDPOINTS.OPERATOR);
  return data.items || [];
}
