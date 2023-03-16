import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Settings = () => <Text>Setting</Text>;

const Map = () => <Text>Map</Text>;

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useFontsOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFontsLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen component={RestaurantsScreen} name="restaurants" />
            <Tab.Screen component={Map} name="map" />
            <Tab.Screen component={Settings} name="settings" />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
