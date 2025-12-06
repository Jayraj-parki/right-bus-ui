import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  codes: [],
  applied: [],
};
const slice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setCodes(state, action) { state.codes = action.payload; },
    applyOffer(state, action) { state.applied.push(action.payload);},
    setAppliedPromo(state, action) {
      state.applied = action.payload; // The promo code applied
    },
    clearAppliedPromo(state) {
      state.applied = null;
    }
  }
});
export const { setCodes, applyOffer ,setAppliedPromo, clearAppliedPromo } = slice.actions;
export default slice.reducer;
