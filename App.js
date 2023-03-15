import { StatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
