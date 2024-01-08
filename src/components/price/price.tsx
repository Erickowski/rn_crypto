import { Text, View } from "react-native";

import { priceSelector } from "@src/redux/selectors";

export function Price() {
  const { price } = priceSelector();

  return (
    <View>
      <Text>Precio: {price.PRICE}</Text>
    </View>
  );
}
