import { createBookingAPI, getMyBookingsAPI } from "@/api/bookings.api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { createBook/+ingAPI, getMyBookingsAPI } from "@/api/booking.api";

export const createBooking = createAsyncThunk("booking/createBooking", async (params) => {
  return await createBookingAPI(params);
});
export const fetchMyBookings = createAsyncThunk("booking/fetchMyBookings", async () => {
  return await getMyBookingsAPI();
});

const initialState = {
  current: null,
  history: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(createBooking.pending, s => {s.loading = true;});
    b.addCase(createBooking.fulfilled, (s, a) => {s.current = a.payload; s.loading = false;});
    b.addCase(createBooking.rejected, (s,a) => {s.loading=false; s.error=a.error;});
    b.addCase(fetchMyBookings.fulfilled, (s, a) => {s.history = a.payload;});
  }
});
export default slice.reducer;
