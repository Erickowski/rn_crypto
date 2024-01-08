import { REQUESTS_STATE } from "@src/types/requests";

export interface ICryptos {
  status: REQUESTS_STATE;
  cryptos: any;
}
