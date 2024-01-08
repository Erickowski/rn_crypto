import { Text, View } from "react-native";

import { priceSelector } from "@src/redux/selectors";

import styles from "./price.module.scss";

export function Price() {
  const { price } = priceSelector();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.value}>{price.PRICE}</Text>
      </Text>
      <View style={styles.text__container}>
        <Text style={styles.text}>Precio más alto del día</Text>
        <Text style={[styles.text, styles.value]}>{price.HIGHDAY}</Text>
      </View>
      <View style={styles.text__container}>
        <Text style={styles.text}>Precio más bajo del día</Text>
        <Text style={[styles.text, styles.value]}>{price.LOWDAY}</Text>
      </View>
      <View style={styles.text__container}>
        <Text style={styles.text}>Variación últimas 24 horas</Text>
        <Text style={[styles.text, styles.value]}>
          {price.CHANGEPCT24HOUR} %
        </Text>
      </View>
      <View style={styles.text__container}>
        <Text style={styles.text}>Última actualización</Text>
        <Text style={[styles.text, styles.value]}>{price.LASTUPDATE}</Text>
      </View>
    </View>
  );
}
