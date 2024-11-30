import { View, ScrollView, SafeAreaView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { AnimatedSuggestions } from "@/components/animated-suggestions/AnimatedSuggestions";
import { search } from "@/helpers/search";
import { type List, SearchList } from "@/typings/search/SearchWeather";
import { ContentUnavailableView } from "@/components/content-unavaliable/ContentUnavailableView";
import { Entypo } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { updateUser } from "@/store";
import { Timestamp } from "firebase/firestore";
import { useUser } from "@/hooks/useUser";
import { useWeatherStore } from "@/store/zustand";

export const Search:
  | React.FC<NativeStackHeaderProps>
  | React.FunctionComponent<NativeStackHeaderProps> = (
  props: NativeStackHeaderProps
): React.ReactNode & React.JSX.Element => {
  const setSelectedItem = useWeatherStore((state) => state.setSelectedItem);

  const [text, setText] = useState<string>();
  const [locations, setLocations] = useState<SearchList>();
  const fadeOpacity = useSharedValue(1);

  const params = props.route.params as any;
  const id = params?.id;
  const user = useUser();
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        onFocus: () => {
          fadeOpacity.value = withTiming(0, { duration: 300 });
        },
        onBlur: () => {
          fadeOpacity.value = withTiming(1, { duration: 300 });
        },
        onChangeText: (event) => setText(event.nativeEvent.text),
        onSearchButtonPress: async (event) => {
          const searchAllLocations = await search(
            event.nativeEvent.text as string
          );

          console.log(searchAllLocations, "res");
          setLocations(searchAllLocations);
        },
      },
    });
  }, [props.navigation]);

  useLayoutEffect(() => {
    if (!text || text === "") {
      setLocations(undefined);
      // fadeOpacity.value = withTiming(0, { duration: 300 });
    }
  }, [text]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  const onPress = async (item: List) => {
    setSelectedItem(item);
    updateUser(id, {
      history: [
        ...user?.history!,
        {
          date: Timestamp.now(),
          query: `${item.sys.country}, ${item.name}`,
        },
      ],
    });
  };

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
      contentInsetAdjustmentBehavior="always"
    >
      <SafeAreaView className="flex-1">
        {text ? (
          <AnimatedSuggestions
            response={locations!}
            onPress={(item) => onPress(item)}
          />
        ) : (
          <Animated.View style={[animatedStyle]}>
            <View className="mt-10">
              <ContentUnavailableView
                title="Search"
                textSize={25}
                description="Lookup for a location."
                descriptionSize={19}
                renderIcon={() => (
                  <Entypo name="text" size={40} color="white" />
                )}
              />
            </View>
          </Animated.View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};
