import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getOffers() {
  const { data } = await api.get(ENDPOINTS.OFFERS);
  return data.codes || [];
}
