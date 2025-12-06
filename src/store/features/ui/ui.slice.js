import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { toast: null, loading: false },
  reducers: {
    setToast(state, action) { state.toast = action.payload; },
    setLoading(state, action) { state.loading = !!action.payload; }
  }
});

export const { setToast, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
