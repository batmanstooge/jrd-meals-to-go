import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantsStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="restaurantdetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
