import { ReactElement, useCallback } from "react";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

interface ILayout {
  children: ReactElement;
}

export function Layout({ children }: ILayout) {
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

  return <ScrollView onLayout={onLayoutRootView}>{children}</ScrollView>;
}
