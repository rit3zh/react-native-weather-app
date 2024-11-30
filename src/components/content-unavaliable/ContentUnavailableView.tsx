import React from "react";
import { View, Text } from "react-native";

interface ContentUnavailableViewProps {
  title: string;
  renderIcon: () => React.ReactNode;
  description: string;
  textSize?: number;
  descriptionSize?: number;
  externalComponent?: () =>
    | React.ReactNode
    | (React.JSX.Element & React.ReactNode);
}

export const ContentUnavailableView: React.FC<ContentUnavailableViewProps> = ({
  title,
  renderIcon,
  description,
  descriptionSize,
  textSize,
  externalComponent,
}: ContentUnavailableViewProps) => {
  return (
    <View className="justify-center items-center p-4">
      <View className="mb-4">{renderIcon()}</View>
      <Text
        numberOfLines={1}
        className="text-lg font-bold text-white max-w-[290px]"
        style={{
          ...(textSize ? { fontSize: textSize } : {}),
        }}
      >
        {title}
      </Text>
      <Text
        className="text-base text-[#949393] text-center mt-2"
        style={{ ...(descriptionSize ? { fontSize: descriptionSize } : {}) }}
      >
        {description}
      </Text>

      {externalComponent ? externalComponent() : null}
    </View>
  );
};
