import axios from "axios";

import {
  requestCryptos,
  requestCryptosFailed,
  requestCryptosSuccess,
} from "@src/redux/actions";

export const fetchCryptos = () => {
  return (dispatch: any) => {
    dispatch(requestCryptos());
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      )
      .then((response) => {
        dispatch(requestCryptosSuccess(response.data.Data));
      })
      .catch(() => {
        dispatch(requestCryptosFailed());
      });
  };
};
