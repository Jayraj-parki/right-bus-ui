import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selected: null,
  operators: [],
};
const slice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    setOperators(state, action) { state.operators = action.payload; },
    selectOperator(state, action) { state.selected = action.payload; },
  }
});
export const { setOperators, selectOperator } = slice.actions;
export default slice.reducer;
