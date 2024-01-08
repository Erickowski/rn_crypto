import { combineReducers } from "redux";

import { formReducer } from "./form";

export const combinedReducers = combineReducers({
  form: formReducer,
});
