import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export async function getTestimonials() {
  const { data } = await api.get(ENDPOINTS.TESTIMONIALS);
  return data.items || [];
}
