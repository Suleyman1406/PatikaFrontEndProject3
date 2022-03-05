import { configureStore } from "@reduxjs/toolkit";
import cyrptoReducer from "./CyrptoSlice";
export const store = configureStore({
  reducer: {
    cyrpto: cyrptoReducer,
  },
});
