import { ScrollView, SafeAreaView, Text, View, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { weatherStyles as styles } from "styles/index";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import Bounceable from "@freakycoder/react-native-bounceable";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";
import { AnimatedPicker, SkeletonPlaceholder } from "@/components";
import { getFormattedDate, splitText } from "@/utilities";
import Animated, { FadeIn } from "react-native-reanimated";
import { useUser } from "@/hooks/useUser";
import { useWeatherStore } from "@/store/index";
import { IHookWeatherResponse } from "@/typings/weather/Weather";
import { weather as weatherInstance } from "@/instance";
import { image } from "@/modifiers/cdn+modify";
export const Home: React.FC<NativeStackHeaderProps> = (
  props: NativeStackHeaderProps
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchLocation, setSearchLocation] =
    useState<IHookWeatherResponse | null>();
  const weather = useCurrentWeather();
  const user = useUser();
  const item = useWeatherStore((state) => state?.selectedItem);

  useLayoutEffect(() => {
    const core = async () => {
      if (!item?.dt) return;
      setLoading(true);
      const weatherResponse = await weatherInstance.getCurrent({
        coordinates: {
          lat: item.coord.lat,
          lon: item.coord.lon,
        },
        units: "metric",
      });

      setSearchLocation(weatherResponse);

      setInterval(() => setLoading(false), 1500);
    };

    core();
  }, [item]);

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      contentInsetAdjustmentBehavior="always"
    >
      <SafeAreaView className="flex-1 bg-black">
        {!weather?.astronomical || loading === true ? (
          <SkeletonPlaceholder />
        ) : (
          <React.Fragment>
            <Animated.View entering={FadeIn.delay(300)}>
              <View className="mt-3">
                <View className="ml-6 flex-row justify-between">
                  <Bounceable
                    onPress={() =>
                      props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                  >
                    <View
                      style={styles.shadow}
                      className="items-center justify-center"
                    >
                      <Octicons name="stack" size={23} color="#e8e8e8" />
                    </View>
                  </Bounceable>
                  <Bounceable
                    onPress={() =>
                      props.navigation.navigate("SearchScreen", {
                        id: user?.id as string,
                      })
                    }
                  >
                    <View
                      style={styles.shadow}
                      className="items-center justify-center mr-5"
                    >
                      <Octicons name="search" size={23} color="#e8e8e8" />
                    </View>
                  </Bounceable>
                </View>

                <View className="flex-row justify-between mt-5">
                  <View className="mt-8 ml-6">
                    <Text className="text-white font-bold text-4xl">
                      {"About Today"}
                    </Text>
                  </View>
                  <View className="items-center justify-center top-4 mr-1 flex-row">
                    <View className="top-[12px] left-2">
                      <AnimatedPicker />
                    </View>
                    <View className="right-4 items-center justify-center">
                      {splitText(
                        searchLocation?.astronomical
                          ? item?.name!
                          : weather?.city || "NO location"
                      ).map((value: string, _: number) => (
                        <View
                          key={_.toString()}
                          className="flex-col items-center justify-center"
                        >
                          <Text
                            className="text-white max-w-[125px]"
                            numberOfLines={1}
                          >
                            {value}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </View>

              <View className="items-center justify-center mt-5">
                <View
                  style={styles.lottieShadow}
                  className="items-center justify-center mr-5"
                >
                  <Image
                    source={
                      searchLocation?.weather?.icon?.raw === "01d"
                        ? require("assets/clear_day.png")
                        : searchLocation?.weather?.icon?.raw === "01n"
                        ? require("assets/clear_night.png")
                        : weather?.weather?.icon?.raw === "01d" &&
                          searchLocation?.dtRaw === undefined
                        ? require("assets/clear_day.png")
                        : weather?.weather?.icon?.raw === "01n" &&
                          searchLocation?.dtRaw === undefined
                        ? require("assets/clear_night.png")
                        : {
                            uri: searchLocation?.astronomical
                              ? searchLocation.weather.icon.url?.replace(
                                  "2x",
                                  "4x"
                                )
                              : weather.weather?.icon?.url.replace("2x", "4x"),
                          }
                    }
                    style={{
                      width:
                        searchLocation?.weather?.icon?.raw === "01n" ||
                        weather?.weather?.icon?.raw === "01n"
                          ? 190
                          : 220,
                      height:
                        searchLocation?.weather?.icon?.raw === "01n" ||
                        weather?.weather?.icon?.raw === "01n"
                          ? 190
                          : 250,
                      marginBottom:
                        searchLocation?.weather?.icon?.raw === "01n" ||
                        weather?.weather?.icon?.raw === "01n"
                          ? 40
                          : searchLocation?.weather?.icon?.raw === "01d" ||
                            weather?.weather?.icon?.raw === "01d"
                          ? 0
                          : 0,
                      marginTop:
                        searchLocation?.weather?.icon?.raw === "01n" ||
                        weather?.weather?.icon?.raw === "01n"
                          ? 30
                          : searchLocation?.weather?.icon?.raw === "01d" ||
                            weather?.weather?.icon?.raw === "01d"
                          ? 0
                          : 0,
                    }}
                  />
                </View>

                <View
                  style={styles.lottieShadow}
                  className="items-center justify-center"
                >
                  <Text className="text-gray-300 text-2xl">
                    {getFormattedDate()}
                  </Text>
                </View>

                <View
                  className="items-center justify-center mt-20 ml-7"
                  style={styles.lottieShadow}
                >
                  <Text className="text-gray-300 text-8xl font-extrabold">
                    {searchLocation?.astronomical
                      ? searchLocation.weather.temp.cur
                      : weather.weather?.temp.cur}
                    °
                  </Text>
                </View>

                <View className="flex-row mb-0 mt-10">
                  <View
                    className="bg-[#0d0d0d] rounded-xl m-5 w-[100px] h-[145px] ml-12"
                    style={styles.card}
                  >
                    <View className="items-center justify-center">
                      <View>
                        <View className="mt-5 items-center justify-center">
                          <Ionicons name="rainy" size={50} color="white" />
                        </View>
                        <View className="items-center justify-center">
                          <Text className="text-white font-bold text-[18px] mt-5">
                            {" "}
                            {searchLocation?.astronomical
                              ? searchLocation?.weather?.rain
                              : weather.weather?.rain}
                            %
                          </Text>
                          <Text className="text-[#d4d4d4] mt-2">Rain</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    className="bg-[#0d0d0d] rounded-xl m-5 w-[100px] h-[145px]"
                    style={styles.card}
                  >
                    <View className="items-center justify-center">
                      <View>
                        <View className="mt-5 items-center justify-center">
                          <FontAwesome6 name="wind" size={45} color="white" />
                        </View>
                        <View className="items-center justify-center">
                          <Text className="text-white font-bold text-[18px] mt-5">
                            {searchLocation?.astronomical
                              ? searchLocation?.weather?.wind?.speed
                              : weather.weather?.wind.speed}
                            km/h
                          </Text>
                          <Text className="text-[#d4d4d4] mt-2">Wind</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    className="bg-[#0d0d0d] rounded-xl m-5 w-[100px] h-[145px] mr-12"
                    style={styles.card}
                  >
                    <View className="items-center justify-center">
                      <View>
                        <View className="mt-5 items-center justify-center">
                          <Ionicons name="water" size={50} color="white" />
                        </View>
                        <View className="items-center justify-center">
                          <Text className="text-white font-bold text-[18px] mt-5">
                            {searchLocation?.astronomical
                              ? searchLocation?.weather?.humidity
                              : weather.weather?.humidity}
                            %
                          </Text>
                          <Text className="text-[#d4d4d4] mt-2">Humidity</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </React.Fragment>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};
