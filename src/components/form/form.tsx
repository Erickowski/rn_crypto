import { useEffect } from "react";
import { Text, View, TouchableHighlight, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { COIN_LABELS, REQUESTS_STATE } from "@src/types";

import { saveCoin, saveCrypto } from "@src/redux/actions";
import { fetchCryptos, fetchPrice } from "@src/redux/thunk";
import { useAppDispatch } from "@src/redux/utils";
import { formSelector, cryptoSelector } from "@src/redux/selectors";

import styles from "./form.module.scss";

export function Form() {
  const dispatch = useAppDispatch();
  const { coin, crypto } = formSelector();
  const { status, cryptos } = cryptoSelector();

  const handleCoin = (coin: string) => {
    dispatch(saveCoin(coin));
  };

  const handleCrypto = (crypto: string) => {
    dispatch(saveCrypto(crypto));
  };

  const handleQuote = () => {
    if (coin.trim() === "" || crypto.trim() === "") {
      showAlert();
      return;
    }

    dispatch(fetchPrice({ coin, crypto }));
  };

  const showAlert = () => {
    Alert.alert("¡Error!", "Ambos campos son obligatorios", [
      {
        text: "Ok",
      },
    ]);
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
        <Picker.Item key="default" label="- Seleccione -" value="" />
        {cryptos.map((crypto) => (
          <Picker.Item
            key={crypto.CoinInfo.Name}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight style={styles.quote} onPress={handleQuote}>
        <Text style={styles.quote__text}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
}
