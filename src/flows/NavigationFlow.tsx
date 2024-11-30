import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Constants from "#/index";
import { IntroStack } from "@/stacks";
import { useInitialRoute } from "@/hooks/useInitialRoute";
import { DrawerStack } from "@/stacks/drawer-stack/DrawerStack";

const { Navigator, Screen } = createNativeStackNavigator();

const NavigationStack: React.FC = () => {
  const { isReady, initialRoute } = useInitialRoute();

  if (!isReady || !initialRoute) {
    return null;
  }

  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        ...Constants.SCREEN_OPTIONS,
      }}
    >
      <Screen name="AppStack" component={DrawerStack as any} />
      <Screen name="IntroStack" component={IntroStack as any} />
    </Navigator>
  );
};

export default NavigationStack;
