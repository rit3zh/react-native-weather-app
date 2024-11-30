import { View } from "react-native";
import React from "react";
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { ContentUnavailableView } from "../content-unavaliable/ContentUnavailableView";
import { Ionicons } from "@expo/vector-icons";

import * as constants from "#/index";
import { AnimatedGradientButton } from "../animated-gradient-button/AnimatedGradientButton";

export const CustomDrawerLayout: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps
) => {
  const onPress = () => props.navigation.closeDrawer();
  return (
    <DrawerContentScrollView {...props}>
      <View className="ml-5">
        <AnimatedGradientButton
          onPress={onPress}
          size={45}
          component={<Ionicons name="close" size={24} color="white" />}
        />
      </View>
      <ContentUnavailableView
        title={constants.CONTENT_UNAVAILABLE_TITLE_NO_SEARCH_HISTORY}
        description={
          constants.CONTENT_UNAVAILABLE_DESCRIPTION_NO_SEARCH_HISTORY
        }
        renderIcon={() => <Ionicons name="book" color={"white"} size={40} />}
      />
    </DrawerContentScrollView>
  );
};
