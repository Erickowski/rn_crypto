import { useSelector } from "react-redux";

import { IStore } from "@src/types";

export const cryptoSelector = () =>
  useSelector((store: IStore) => store.cryptos);
