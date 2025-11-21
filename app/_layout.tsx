import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { COLORS } from "@/src/constants";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Inter-Black": require("@/src/assets/fonts/Inter_24pt-Black.ttf"),
        "Inter-Bold": require("@/src/assets/fonts/Inter_24pt-Bold.ttf"),
        "Inter-ExtraBold": require("@/src/assets/fonts/Inter_24pt-ExtraBold.ttf"),
        "Inter-Italic": require("@/src/assets/fonts/Inter_24pt-Italic.ttf"),
        "Inter-Medium": require("@/src/assets/fonts/Inter_24pt-Medium.ttf"),
        "Inter-Regular": require("@/src/assets/fonts/Inter_24pt-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Or return a loading component
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="paybills" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
