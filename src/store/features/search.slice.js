import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchTripsAPI } from "@/api/search.api";

export const searchTrips = createAsyncThunk("search/searchTrips", async (params) => {
  return await searchTripsAPI(params);
});

const initialState = {
  from: "",
  to: "",
  date: "",
  returnDate: "",
  pax: 1,
  results: [],
  loading: false,
  womenOnly: false,
  error: null,
  tripType: "single_trip",
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setField(state, action) {
      state[action.payload.key] = action.payload.value;
    },
    setTripType(state, action) {
      state.tripType = action.payload;
    }
  },
  extraReducers: (b) => {
    b.addCase(searchTrips.pending, (s) => {s.loading = true;});
    b.addCase(searchTrips.fulfilled, (s, a) => {s.results = a.payload; s.loading = false;});
    b.addCase(searchTrips.rejected, (s, a) => {s.loading = false; s.error = a.error;});
  },
});

export const { setField, setTripType } = slice.actions;
export default slice.reducer;
