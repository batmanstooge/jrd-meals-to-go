import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantDetails = () => <Text>Restaurant Details</Text>;

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
        component={RestaurantDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
