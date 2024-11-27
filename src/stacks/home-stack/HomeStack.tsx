import React from "react";
import { View, Text } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import { Home as HomeScreen } from "@/pages/screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeStack: React.FC<NativeStackHeaderProps> = (props) => {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
