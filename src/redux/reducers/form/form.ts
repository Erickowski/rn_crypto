import { IAction } from "@src/types";

import { SAVE_COIN } from "@src/redux/types";

interface IState {
  coin: string;
}

const initialState: IState = {
  coin: "",
};

export const formReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SAVE_COIN: {
      return { ...state, coin: action.payload };
    }
    default: {
      return state;
    }
  }
};
