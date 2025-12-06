import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "upi",
  status: "idle",
  error: null,
};
const slice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setMode(state, action) { state.mode = action.payload; },
    setStatus(state, action) { state.status = action.payload;}
  }
});
export const { setMode,setStatus } = slice.actions;
export default slice.reducer;
