import { Text, View } from "react-native";

import { priceSelector } from "@src/redux/selectors";

import styles from "./price.module.scss";

export function Price() {
  const { price } = priceSelector();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.value}>{price.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más alto del día
        <Text style={styles.value}>{price.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más bajo del día
        <Text style={styles.value}>{price.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variación últimas 24 horas
        <Text style={styles.value}>{price.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Última actualización
        <Text style={styles.value}>{price.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}
