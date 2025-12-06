import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getBuses() {
  const { data } = await api.get(ENDPOINTS.BUSES);
  return data.items || [];
}

export async function getBusById(id) {
  const { data } = await api.get(ENDPOINTS.BUS_DETAIL(id));
  return data;
}


export async function getBusList() {
  const { data } = await api.get(ENDPOINTS.BUSES);
  return data.items || [];
}

export async function getBusDetail(id) {
  const { data } = await api.get(ENDPOINTS.BUS_DETAIL(id));
  return data || null;
}