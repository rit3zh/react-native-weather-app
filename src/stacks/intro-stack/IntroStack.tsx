import React from "react";

import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import { Intro } from "@/pages/screens";
import * as constants from "#/index";
const { Navigator, Screen } = createNativeStackNavigator();

export const IntroStack: React.FC<NativeStackHeaderProps> = (props) => {
  return (
    <Navigator
      screenOptions={{
        ...constants.SCREEN_OPTIONS,
      }}
    >
      <Screen name="IntroScreen" component={Intro as any} />
    </Navigator>
  );
};
