import { View, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { skeletonStyles as styles } from "styles/index";
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const SkeletonPlaceholder:
  | React.FC
  | React.FunctionComponent = (): React.ReactNode &
  React.JSX.Element &
  React.ReactElement => {
  return (
    <Animated.View entering={FadeIn}>
      <View className="flex-row justify-between">
        <View className="ml-5">
          <ShimmerPlaceholder
            shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
            style={{
              ...styles.headerBoxes,
            }}
          />
        </View>
        <View className="mr-5">
          <ShimmerPlaceholder
            shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
            contentStyle={{
              width: 200,
              height: 200,
            }}
            style={{
              ...styles.headerBoxes,
            }}
          />
        </View>
      </View>
      <View className="flex-row justify-between mt-14 ml-5 items-center">
        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          contentStyle={{
            width: 200,
            height: 200,
          }}
          style={{
            ...styles.title,
          }}
        />

        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          contentStyle={{
            width: 200,
            height: 200,
          }}
          style={{
            ...styles.selector,
          }}
        />
        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          contentStyle={{
            width: 200,
            height: 200,
          }}
          style={{
            ...styles.selectorBox,
          }}
        />
      </View>

      <View className="items-center justify-center mt-10">
        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          style={{
            ...styles.coreImage,
          }}
        />
      </View>

      <View className="items-center justify-center mt-10">
        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          style={{
            ...styles.date,
          }}
        />
      </View>

      <View className="items-center justify-center mt-10">
        <ShimmerPlaceholder
          shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
          style={{
            ...styles.temp,
          }}
        />
      </View>
      <FlatList
        data={Array.from({ length: 3 })}
        scrollEnabled={false}
        horizontal={true}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Animated.View
            key={index.toString()}
            className="m-5 mt-14"
            entering={
              index === 0
                ? FadeInLeft.delay(500).stiffness(1)
                : index === 1
                ? FadeInUp.delay(500).stiffness(1)
                : FadeInRight.delay(500).stiffness(1)
            }
          >
            <ShimmerPlaceholder
              shimmerColors={["#1a1a1a", "#424242", "#1a1a1a"]}
              style={{
                ...styles.card,
              }}
            />
          </Animated.View>
        )}
      />
    </Animated.View>
  );
};
