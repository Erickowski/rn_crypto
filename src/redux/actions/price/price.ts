import {
  REQUEST_PRICE,
  REQUEST_PRICE_FAILED,
  REQUEST_PRICE_SUCCESS,
} from "@src/redux/types";

export const requestPrice = () => ({
  type: REQUEST_PRICE,
});

export const requestPriceSuccess = (data: any) => ({
  type: REQUEST_PRICE_SUCCESS,
  payload: data,
});

export const requestPriceFailed = () => ({
  type: REQUEST_PRICE_FAILED,
});
