import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getNotificationsAPI() {
  const { data } = await api.get(ENDPOINTS.NOTIFICATIONS);
  return data.list || [];
}
