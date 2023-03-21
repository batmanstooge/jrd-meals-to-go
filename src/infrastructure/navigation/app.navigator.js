import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Button, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext } from "react";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
const Tab = createBottomTabNavigator();
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View>
      <Text>Setting</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
};
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
            <Tab.Screen
              component={MapScreen}
              name="map"
              options={{ headerShown: false }}
            />
            <Tab.Screen component={Settings} name="settings" />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
