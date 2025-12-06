import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHotelCombosAPI } from "@/api/hotel.api";

export const fetchHotelCombos = createAsyncThunk("hotel/fetchCombos", async () =>
  await getHotelCombosAPI()
);

const slice = createSlice({
  name: "hotel",
  initialState: { combos: [], selectedCombo: null, loading: false, error: null },
  reducers: {
    selectCombo(state, action) { state.selectedCombo = action.payload; }
  },
  extraReducers: (b) => {
    b.addCase(fetchHotelCombos.pending, s => {s.loading=true;});
    b.addCase(fetchHotelCombos.fulfilled, (s,a) => {s.combos=a.payload; s.loading=false;});
    b.addCase(fetchHotelCombos.rejected, (s,a) => {s.loading=false; s.error=a.error;});
  }
});
export const { selectCombo } = slice.actions;
export default slice.reducer;
