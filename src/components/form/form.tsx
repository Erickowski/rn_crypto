import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";

import { COIN_LABELS, IStore } from "@src/types";
import { saveCoin } from "@src/redux/actions";

import styles from "./form.module.scss";

export function Form() {
  const dispatch = useDispatch();
  const { coin } = useSelector((store: IStore) => store.form);

  const handleCoin = (coin: string) => {
    dispatch(saveCoin(coin));
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Moneda</Text>
      <Picker onValueChange={handleCoin} selectedValue={coin}>
        {COIN_LABELS.map((coin) => (
          <Picker.Item key={coin.value} label={coin.label} value={coin.value} />
        ))}
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
}
