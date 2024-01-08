import { REQUESTS_STATE } from "@src/types/requests";

export interface IPrice {
  status: REQUESTS_STATE;
  price: any;
}
