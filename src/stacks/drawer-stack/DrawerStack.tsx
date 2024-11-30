import React from "react";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import * as constants from "#/index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "../home-stack/HomeStack";
import { CustomDrawerLayout } from "~/index";

const { Navigator, Screen } = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerStack: React.FC<NativeStackHeaderProps> = (
  props: NativeStackHeaderProps
) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...(constants.SCREEN_OPTIONS as any),
      }}
      drawerContent={(props) => (
        <React.Fragment>
          <CustomDrawerLayout {...props} />
        </React.Fragment>
      )}
    >
      <Drawer.Screen
        name="HomeStack"
        initialParams={props.route.params}
        component={HomeStack as any}
      />
    </Drawer.Navigator>
  );
};
