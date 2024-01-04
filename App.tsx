import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "./app.module.scss";

export default function App() {
  return (
    <View style={styles.app}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
