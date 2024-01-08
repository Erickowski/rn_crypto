import { useEffect } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

import { COIN_LABELS, IStore, REQUESTS_STATE } from "@src/types";

import { saveCoin, saveCrypto } from "@src/redux/actions";
import { fetchCryptos } from "@src/redux/thunk";
import { useAppDispatch } from "@src/redux/utils";

import styles from "./form.module.scss";

export function Form() {
  const dispatch = useAppDispatch();
  const { coin, crypto } = useSelector((store: IStore) => store.form);
  const { status, cryptos } = useSelector((store: IStore) => store.cryptos);

  const handleCoin = (coin: string) => {
    dispatch(saveCoin(coin));
  };

  const handleCrypto = (crypto: string) => {
    dispatch(saveCrypto(crypto));
  };

  useEffect(() => {
    if (status === REQUESTS_STATE.idle) {
      dispatch(fetchCryptos());
    }
  }, [status]);

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        onValueChange={handleCoin}
        selectedValue={coin}
        itemStyle={{ height: 120 }}
      >
        {COIN_LABELS.map((coin) => (
          <Picker.Item key={coin.value} label={coin.label} value={coin.value} />
        ))}
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        onValueChange={handleCrypto}
        selectedValue={crypto}
        itemStyle={{ height: 120 }}
      >
        {cryptos.map((crypto) => (
          <Picker.Item
            key={crypto.CoinInfo.Name}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.FullName}
          />
        ))}
      </Picker>
    </View>
  );
}
