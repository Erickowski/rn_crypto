import { REQUESTS_STATE } from "@src/types/requests";

interface Coin {
  Name: string;
  FullName: string;
}

interface CryptoInfo {
  CoinInfo: Coin;
}

export interface ICryptos {
  status: REQUESTS_STATE;
  cryptos: CryptoInfo[];
}
