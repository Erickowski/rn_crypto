import { IForm } from "./form";
import { ICryptos } from "./cryptos";

export interface IStore {
  form: IForm;
  cryptos: ICryptos;
}
