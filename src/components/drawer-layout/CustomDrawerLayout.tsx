import { View, FlatList, Text } from "react-native";
import React from "react";
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { ContentUnavailableView } from "../content-unavaliable/ContentUnavailableView";
import { Ionicons } from "@expo/vector-icons";

import * as constants from "#/index";
import { AnimatedGradientButton } from "../animated-gradient-button/AnimatedGradientButton";
import { useUser } from "@/hooks/useUser";

export const CustomDrawerLayout: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps
) => {
  const onPress = () => props.navigation.closeDrawer();

  const user = useUser();

  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View className="ml-5">
        <View className="mt-5 ml-5 top-2 flex-row items-center justify-between">
          <View className="right-5">
            <Text className="font-bold text-white text-3xl">
              Recent Searches
            </Text>
          </View>
          <View className="mr-4 right-0">
            <AnimatedGradientButton
              onPress={onPress}
              size={45}
              component={<Ionicons name="close" size={24} color="white" />}
            />
          </View>
        </View>
      </View>
      {!user?.history?.length ? (
        <ContentUnavailableView
          title={constants.CONTENT_UNAVAILABLE_TITLE_NO_SEARCH_HISTORY}
          description={
            constants.CONTENT_UNAVAILABLE_DESCRIPTION_NO_SEARCH_HISTORY
          }
          renderIcon={() => <Ionicons name="book" color={"white"} size={40} />}
        />
      ) : (
        <React.Fragment>
          <FlatList
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View className="h-[0.2px] w-full bg-gray-600 mx-5 left-[0px]" />
            )}
            data={user.history}
            keyExtractor={(key, index) => index.toString()}
            renderItem={({ item, index }) => {
              const firestoreDate = new Date(
                item.date?.seconds * 1000 + item?.date?.nanoseconds / 1000000
              );

              const formattedDate = firestoreDate.toLocaleString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              return (
                <View className="m-5 mt-10">
                  <View>
                    <Text className="font-bold text-white">{item.query}</Text>
                    <Text className="text-[#bfbfbf]">{formattedDate}</Text>
                  </View>
                </View>
              );
            }}
          />
        </React.Fragment>
      )}
    </DrawerContentScrollView>
  );
};
