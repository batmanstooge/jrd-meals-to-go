import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantDetails = () => <Text>Restaurant Details</Text>;

const RestaurantsStack = createNativeStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
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
