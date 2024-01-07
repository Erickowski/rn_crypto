import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { MONEY_LABELS } from "@src/types";

import styles from "./form.module.scss";

export function Form() {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Moneda</Text>
      <Picker>
        {MONEY_LABELS.map((label) => (
          <Picker.Item
            key={label.value}
            label={label.label}
            value={label.value}
          />
        ))}
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
}
