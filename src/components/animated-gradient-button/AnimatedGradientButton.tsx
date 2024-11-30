import React from "react";
import Bounceable from "@freakycoder/react-native-bounceable";
import { View } from "react-native";
import { MotiView } from "moti";

export const AnimatedGradientButton: React.FC<{
  onPress: () => void;
  component: React.ReactNode;
  size: number | 100;
}> = ({ onPress, component, size }) => {
  return (
    <Bounceable onPress={onPress}>
      <MotiView
        className="items-center justify-center"
        from={{}}
        animate={
          {
            // width: size + 20,
            // height: size + 20,
            // borderRadius: (size + 20) / 2,
            // borderWidth: size / 10,
            // shadowOpacity: 1,
          }
        }
        transition={{
          type: "timing",
          duration: 1500,
          loop: true,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 2,
          borderColor: "#fff",
          shadowColor: "#fff",

          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      >
        <View className="items-center justify-center">{component}</View>
      </MotiView>
    </Bounceable>
  );
};
