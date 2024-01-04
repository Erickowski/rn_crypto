import { Platform, Text } from "react-native";

import styles from "./header.module.scss";

export function Header() {
  return <Text style={styles[`container--${Platform.OS}`]}>Header</Text>;
}
