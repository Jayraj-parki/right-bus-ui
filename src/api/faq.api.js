import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getFaq() {
  const { data } = await api.get(ENDPOINTS.FAQ);
  return data.items || [];
}
