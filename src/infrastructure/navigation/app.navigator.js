import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";
const Tab = createBottomTabNavigator();
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
            <Tab.Screen component={SettingsNavigator} name="settings" />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
