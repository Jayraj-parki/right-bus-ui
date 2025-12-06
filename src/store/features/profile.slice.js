import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lang: "en",
  region: "IN",
  user: null,
  savedPassengers: [],
};
const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLang(state, action) {state.lang=action.payload;},
    setRegion(state,action){state.region=action.payload;},
    setUser(state,action){state.user=action.payload;},
    setSavedPassengers(state,action){state.savedPassengers=action.payload;}
  }
});
export const { setLang, setRegion, setUser, setSavedPassengers } = slice.actions;
export default slice.reducer;
