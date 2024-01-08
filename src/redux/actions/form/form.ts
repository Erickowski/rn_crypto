import { SAVE_COIN, SAVE_CRYPTO } from "@src/redux/types";

export const saveCoin = (data: string) => ({
  type: SAVE_COIN,
  payload: data,
});

export const saveCrypto = (data: string) => ({
  type: SAVE_CRYPTO,
  payload: data,
});
