import { Text, FlatList, View } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import type { SearchList, List } from "@/typings/search/SearchWeather";
import { Image } from "react-native";
import * as constants from "#/index";
import { flag, modify } from "@/modifiers/cdn+modify";
import Bounceable from "@freakycoder/react-native-bounceable";

interface IProps {
  response: SearchList;
  onPress?: (item: List) => any;
}

export const AnimatedSuggestions:
  | React.FC<IProps>
  | React.FunctionComponent<IProps> = (
  props: IProps
): React.ReactNode & React.JSX.Element => {
  return (
    <FlatList
      scrollEnabled={false}
      data={props?.response?.list}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Bounceable onPress={() => props?.onPress!(item)}>
          <Animated.View
            className="ml-5 m-5"
            entering={FadeIn.delay(index * 200).springify()}
            exiting={FadeOut}
          >
            <View className="flex-row items-center">
              <Image
                source={{
                  //   uri:
                  //     constants.CDN_WEATHER_API + modify(item.weather[0]?.icon),
                  uri: flag(item.sys.country),
                }}
                className="w-14 h-14"
              />
              <View className="ml-3 flex-row justify-between flex-1">
                <View>
                  <Text
                    className="text-[#ededed] font-bold text-2xl max-w-[200px]"
                    numberOfLines={1}
                  >
                    {item.sys.country}, {item.name}
                  </Text>
                  <Text className="text-gray-200 text-sm">
                    {item.coord.lat}, {item.coord.lon}
                  </Text>
                </View>
                <View className="items-center justify-center">
                  <Text className="text-[#ededed] font-bold text-base">
                    {Math.floor(item?.main?.temp)}°
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </Bounceable>
      )}
      ItemSeparatorComponent={() => (
        <View className="h-[0.2px] w-full bg-gray-600 mx-5 left-[60px]" />
      )}
    />
  );
};
