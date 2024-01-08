import { IAction, IPrice, REQUESTS_STATE } from "@src/types";

import {
  REQUEST_PRICE,
  REQUEST_PRICE_FAILED,
  REQUEST_PRICE_SUCCESS,
} from "@src/redux/types";

const initialState: IPrice = {
  status: REQUESTS_STATE.idle,
  price: {},
};

export const priceReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case REQUEST_PRICE: {
      return { ...state, status: REQUESTS_STATE.loading };
    }
    case REQUEST_PRICE_SUCCESS: {
      return {
        ...state,
        status: REQUESTS_STATE.success,
        cryptos: action.payload,
      };
    }
    case REQUEST_PRICE_FAILED: {
      return { ...state, status: REQUESTS_STATE.error };
    }
    default: {
      return state;
    }
  }
};
