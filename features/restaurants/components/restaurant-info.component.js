import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Regina Cassandra",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Regina_Cassandra_grace_the_launch_of_Aankhen_2_%2817%29_%28cropped%29.jpg",
    ],
    address = "Madras, TamilNadu",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
