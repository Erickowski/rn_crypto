import { IAction, IForm } from "@src/types";

import { SAVE_COIN, SAVE_CRYPTO } from "@src/redux/types";

const initialState: IForm = {
  coin: "",
  crypto: "",
};

export const formReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SAVE_COIN: {
      return { ...state, coin: action.payload };
    }
    case SAVE_CRYPTO: {
      return { ...state, crypto: action.payload };
    }
    default: {
      return state;
    }
  }
};
