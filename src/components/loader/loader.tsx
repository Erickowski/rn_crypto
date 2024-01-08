import { ActivityIndicator, View } from "react-native";

import styles from "./loader.module.scss";

export function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#5e49e2" />
    </View>
  );
}
