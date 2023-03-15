import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
const titlefontFamily = `${(props) => props.theme.fonts.body}`;
const RestaurantCard = styled(Card)`
  backgroundcolor: "white";
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: "white";
`;

const RestaurantCardTitleContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCardAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
      <RestaurantCardTitleContainer>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </RestaurantCardTitleContainer>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 16, backgroundColor: "white" },
});
