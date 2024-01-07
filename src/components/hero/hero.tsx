import { Image } from "react-native";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <Image
      style={styles.hero}
      source={require("@src/assets/img/cryptomonedas.png")}
    />
  );
}
