import { useSelector } from "react-redux";

import { IStore } from "@src/types";

export const formSelector = () => useSelector((store: IStore) => store.form);
