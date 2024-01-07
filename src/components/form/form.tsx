import { Text, View } from "react-native";

import styles from "./form.module.scss";

export function Form() {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Moneda</Text>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
}
