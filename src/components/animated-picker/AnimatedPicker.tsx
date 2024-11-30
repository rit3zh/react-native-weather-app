import { View, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export const AnimatedPicker:
  | React.FC
  | React.FunctionComponent = (): React.ReactNode & React.JSX.Element => {
  return (
    <MaskedView
      style={{
        height: 50,
        width: 50,
      }}
      maskElement={
        <Ionicons
          name="location-sharp"
          size={25}
          color="white"
          style={{
            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          }}
        />
      }
    >
      <LinearGradient colors={["#50bff2", "#131122"]} style={{ flex: 1 }} />
    </MaskedView>
  );
};
