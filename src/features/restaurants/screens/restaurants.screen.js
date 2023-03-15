import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantsSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

const RestaurantsSearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsInfoCardContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  "background-color":blue ;
  flex: 1;
`;

export const RestaurantsScreen = () => (
  <RestaurantsSafeAreaView>
    <RestaurantsSearchContainer>
      <Searchbar />
    </RestaurantsSearchContainer>
    <RestaurantsInfoCardContainer>
      <RestaurantInfoCard />
    </RestaurantsInfoCardContainer>
  </RestaurantsSafeAreaView>
);
