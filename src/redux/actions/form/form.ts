import { SAVE_COIN } from "@src/redux/types";

export const saveCoin = (data: string) => ({
  type: SAVE_COIN,
  payload: data,
});
