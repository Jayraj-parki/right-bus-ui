import { createSlice } from "@reduxjs/toolkit";
import { fetchBuses, fetchBusById } from "./buses.thunks";

const slice = createSlice({
  name: "buses",
  initialState: { items: [], current: null, status: "idle" },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchBuses.pending, (s) => { s.status = "loading"; });
    b.addCase(fetchBuses.fulfilled, (s, a) => { s.items = a.payload; s.status = "idle"; });
    b.addCase(fetchBusById.fulfilled, (s, a) => { s.current = a.payload; });
  }
});

export default slice.reducer;
