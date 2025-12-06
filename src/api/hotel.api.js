import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getHotelCombosAPI() {
  const { data } = await api.get(ENDPOINTS.HOTEL_COMBOS);
  return data.combos || [];
}
export async function getHotelComboDetailAPI(id) {
  const { data } = await api.get(ENDPOINTS.HOTEL_COMBO_DETAIL(id));
  return data || null;
}
