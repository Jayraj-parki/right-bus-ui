import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const slice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(state, action) { state.list.unshift(action.payload); }
  }
});
export const { addNotification } = slice.actions;
export default slice.reducer;
