import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Constants from "#/index";
import { HomeStack } from "@/stacks";

const { Navigator, Screen } = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Navigator
      screenOptions={{
        ...Constants.SCREEN_OPTIONS,
      }}
    >
      <Screen name="AppStack" component={HomeStack as any} />
    </Navigator>
  );
};

export default NavigationStack;
