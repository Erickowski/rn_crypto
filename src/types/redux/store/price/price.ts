import { REQUESTS_STATE } from "@src/types/requests";

interface Price {
  PRICE?: string;
  HIGHDAY?: string;
  LOWDAY?: string;
  CHANGEPCT24HOUR?: string;
  LASTUPDATE?: string;
}

export interface IPrice {
  status: REQUESTS_STATE;
  price: Price;
}
