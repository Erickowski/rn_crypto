import { combineReducers } from "redux";

import { formReducer } from "./form";
import { cryptosReducer } from "./cryptos";
import { priceReducer } from "./price";

export const combinedReducers = combineReducers({
  form: formReducer,
  cryptos: cryptosReducer,
  price: priceReducer,
});
