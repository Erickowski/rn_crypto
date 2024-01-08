import { IAction, REQUESTS_STATE } from "@src/types";

import {
  REQUEST_CRYPTOS,
  REQUEST_CRYPTOS_FAILED,
  REQUEST_CRYPTOS_SUCCESS,
} from "@src/redux/types";

interface IState {
  status: REQUESTS_STATE;
  cryptos: any;
}

const initialState: IState = {
  status: REQUESTS_STATE.idle,
  cryptos: {},
};

export const cryptosReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case REQUEST_CRYPTOS: {
      return { ...state, status: REQUESTS_STATE.loading };
    }
    case REQUEST_CRYPTOS_SUCCESS: {
      return {
        ...state,
        status: REQUESTS_STATE.success,
        cryptos: action.payload,
      };
    }
    case REQUEST_CRYPTOS_FAILED: {
      return { ...state, status: REQUESTS_STATE.error };
    }
    default: {
      return state;
    }
  }
};
