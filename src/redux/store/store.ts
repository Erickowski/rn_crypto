import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { combinedReducers } from "@src/redux/reducers";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;
