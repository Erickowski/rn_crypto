import { useSelector } from "react-redux";

import { IStore } from "@src/types";

export const priceSelector = () => useSelector((store: IStore) => store.price);
