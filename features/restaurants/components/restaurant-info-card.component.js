import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

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
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 16, backgroundColor: "white" },
});
