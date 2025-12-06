import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

export const fetchStats = createAsyncThunk("landing/stats", async () => {
  const { data } = await api.get(ENDPOINTS.STATS);
  return data;
});
export const fetchTestimonials = createAsyncThunk("landing/testimonials", async () => {
  const { data } = await api.get(ENDPOINTS.TESTIMONIALS);
  return data.items || [];
});
export const fetchFaq = createAsyncThunk("landing/faq", async () => {
  const { data } = await api.get(ENDPOINTS.FAQ);
  return data.items || [];
});
export const fetchPopular = createAsyncThunk("landing/popular", async () => {
  const { data } = await api.get(ENDPOINTS.BUSES);
  return data.items?.slice(0, 6) || [];
});

const landingSlice = createSlice({
  name: "landing",
  initialState: { stats: null, testimonials: [], faq: [], popular: [] },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchStats.fulfilled, (s, a) => { s.stats = a.payload; });
    b.addCase(fetchTestimonials.fulfilled, (s, a) => { s.testimonials = a.payload; });
    b.addCase(fetchFaq.fulfilled, (s, a) => { s.faq = a.payload; });
    b.addCase(fetchPopular.fulfilled, (s, a) => { s.popular = a.payload; });
  }
});

export default landingSlice.reducer;
