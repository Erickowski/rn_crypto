import {
  REQUEST_CRYPTOS,
  REQUEST_CRYPTOS_FAILED,
  REQUEST_CRYPTOS_SUCCESS,
} from "@src/redux/types";

export const requestCryptos = () => ({
  type: REQUEST_CRYPTOS,
});

export const requestCryptosSuccess = (data: any) => ({
  type: REQUEST_CRYPTOS_SUCCESS,
  payload: data,
});

export const requestCryptosFailed = () => ({
  type: REQUEST_CRYPTOS_FAILED,
});
