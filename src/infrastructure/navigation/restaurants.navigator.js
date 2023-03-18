import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createNativeStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
