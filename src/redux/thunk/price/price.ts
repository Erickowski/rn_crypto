import axios from "axios";

import {
  requestPrice,
  requestPriceFailed,
  requestPriceSuccess,
} from "@src/redux/actions";

interface Params {
  coin: string;
  crypto: string;
}

export const fetchPrice = ({ coin, crypto }: Params) => {
  return (dispatch: any) => {
    dispatch(requestPrice());
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
      )
      .then((response) => {
        dispatch(requestPriceSuccess(response.data.DISPLAY[crypto][coin]));
      })
      .catch(() => {
        dispatch(requestPriceFailed());
      });
  };
};
