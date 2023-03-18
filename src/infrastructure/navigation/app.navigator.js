import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurants.navigator";
const Tab = createBottomTabNavigator();
const Settings = () => <Text>Setting</Text>;
const Map = () => <Text>Map</Text>;
const getIconName = (route, focused) => {
  let iconName;
  if (route.name === "restaurantsnavigator") {
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
export const AppNavigator = () => {
  return (
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
        <Tab.Screen
          component={RestaurantsNavigator}
          name="restaurantsnavigator"
          options={{ headerShown: false, title: "restaurants" }}
        />
        <Tab.Screen component={Map} name="map" />
        <Tab.Screen component={Settings} name="settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
