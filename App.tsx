import "./global.css";
import * as React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { NavigationFlow } from "@/index";
import { StatusBar } from "expo-status-bar";
import { Appearance } from "react-native";

export default function App<T>() {
  Appearance.setColorScheme("dark");
  return (
    <NavigationContainer theme={DarkTheme}>
      <NavigationFlow />
      <StatusBar animated style="light" />
    </NavigationContainer>
  );
}
