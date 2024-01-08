import { REQUESTS_STATE } from "@src/types/requests";

interface Price {
  PRICE?: string;
}

export interface IPrice {
  status: REQUESTS_STATE;
  price: Price;
}
