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
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Settings = () => <Text>Setting</Text>;

const Map = () => <Text>Map</Text>;

const getIconName = (route, focused) => {
  let iconName;
  if (route.name === "restaurants") {
    iconName = focused ? "md-restaurant" : "md-restaurant-outline";
  } else if (route.name === "map") {
    iconName = focused ? "md-map" : "md-map-outline";
  } else if (route.name === "settings") {
    iconName = focused ? "md-settings" : "md-settings-outline";
  }
  return iconName;
};

const getTabBarIcon = (route, focused, color, size) => {
  const iconName = getIconName(route, focused);
  return <Ionicons name={iconName} size={size} color={color} />;
};

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
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  return getTabBarIcon(route, focused, color, size);
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen component={RestaurantsScreen} name="restaurants" />
              <Tab.Screen component={Map} name="map" />
              <Tab.Screen component={Settings} name="settings" />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
