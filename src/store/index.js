import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault({serializableCheck:false}),
  devTools: process.env.NODE_ENV !== "production",
});
