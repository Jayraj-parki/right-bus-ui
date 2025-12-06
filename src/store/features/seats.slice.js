import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  seats: [],
  selectedSeatId: null,
  seatLoading: false,
  seatError: null,
};
const slice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    setSeats(state, action) { state.seats = action.payload; },
    selectSeat(state, action) { state.selectedSeatId = action.payload; },
  }
});
export const { setSeats, selectSeat } = slice.actions;
export default slice.reducer;
