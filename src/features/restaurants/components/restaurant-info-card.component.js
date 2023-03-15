import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  backgroundcolor: "white";
`;
const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 16, backgroundColor: "white" },
});
