import { combinedReducers } from "@src/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combinedReducers,
});
