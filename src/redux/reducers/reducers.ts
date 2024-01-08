import { combineReducers } from "redux";

import { formReducer } from "./form";
import { cryptosReducer } from "./cryptos";

export const combinedReducers = combineReducers({
  form: formReducer,
  cryptos: cryptosReducer,
});
