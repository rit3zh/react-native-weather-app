import "./global.css";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationFlow } from "@/index";
export default function App<T>() {
  return (
    <NavigationContainer>
      <NavigationFlow />
    </NavigationContainer>
  );
}
