import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function initiatePayment(payload) {
  const { data } = await api.post(ENDPOINTS.PAYMENT, payload);
  return data || {};
}
