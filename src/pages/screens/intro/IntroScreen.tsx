import { View, Image, Text, ScrollView } from "react-native";
import React from "react";
import { homeStyles as styles } from "styles/index";
import * as constants from "#/index";
import Bounceable from "@freakycoder/react-native-bounceable";
import { setUser } from "@/core/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export const Intro: React.FC<NativeStackHeaderProps> = (
  props: NativeStackHeaderProps
) => {
  // const navigation = useNavigation();
  const onPress = async () => {
    await setUser();
    return props.navigation.navigate("AppStack");
  };
  return (
    <ScrollView
      className="flex-1 bg-[#131122]"
      contentContainerClassName="flex-grow"
    >
      <View className="flex-1 bg-[#131122] justify-center items-center">
        <View style={styles.shadow}>
          <Image source={require("assets/weather.png")} className="w-40 h-40" />
        </View>

        <View className="mt-20 items-center justify-center">
          <Text className="text-white font-bold text-5xl mb-2">
            {constants.INTRO_TITLE}
          </Text>
          <Text className="text-white font-bold text-4xl">
            {constants.INTRO_TITLE_DESC}
          </Text>
        </View>
        <View className="mt-safe-or-5 items-center justify-center">
          <Text className="text-gray-400 text-lg text-center p-5">
            {constants.INTRO_SUBTITLE}
          </Text>
        </View>
        <Bounceable bounceEffectIn={0.98} onPress={onPress}>
          <View
            style={styles.buttonShadow}
            className="w-48 h-16 rounded-full bg-[#50bff2] top-28 items-center justify-center"
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
          </View>
        </Bounceable>
      </View>
    </ScrollView>
  );
};
