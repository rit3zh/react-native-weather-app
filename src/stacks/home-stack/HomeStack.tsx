import React from "react";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import { Home, Search } from "@/pages/screens";
import * as constants from "#/index";

const { Navigator, Screen } = createNativeStackNavigator();

export const HomeStack: React.FC<NativeStackHeaderProps> = (props) => {
  return (
    <Navigator
      screenOptions={{
        ...(constants.SCREEN_OPTIONS as any),
      }}
    >
      <Screen name="HomeScreen" component={Home as any} />
      <Screen
        name="SearchScreen"
        component={Search as any}
        options={{
          presentation: "formSheet",
          headerShown: true,
          sheetAllowedDetents: "all" as any,
          sheetGrabberVisible: true,
          fullScreenGestureShadowEnabled: false,
          headerTitle: "Search",

          headerShadowVisible: true,
          keyboardHandlingEnabled: true,
          headerTitleStyle: { color: "white" },
          headerLargeTitle: true,
          headerTransparent: true,

          sheetLargestUndimmedDetentIndex: "last",

          sheetExpandsWhenScrolledToEdge: true,
          headerLargeStyle: {
            backgroundColor: "#000",
          },

          headerLargeTitleShadowVisible: true,
          headerBlurEffect: "dark",
        }}
      />
    </Navigator>
  );
};
