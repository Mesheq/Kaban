const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge2 from "./screens/AndroidLarge2";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Lato: require("./assets/fonts/Lato.ttf"),
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_semibold: require("./assets/fonts/Lato_semibold.ttf"),
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("./assets/fonts/Lato_extrabold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="AndroidLarge1"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="AndroidLarge1"
                component={AndroidLarge1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge3"
                component={AndroidLarge3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge2"
                component={AndroidLarge2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
