import { IForm } from "./form";
import { ICryptos } from "./cryptos";
import { IPrice } from "./price";

export interface IStore {
  form: IForm;
  cryptos: ICryptos;
  price: IPrice;
}
