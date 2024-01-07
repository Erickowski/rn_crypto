import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import { Header } from "@src/components";

export function Main() {
  const [fontsLoaded] = useFonts({
    "Lato-Black": require("@src/assets/fonts/Lato-Black.ttf"),
    "Lato-Regular": require("@src/assets/fonts/Lato-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      <Header />
    </View>
  );
}
