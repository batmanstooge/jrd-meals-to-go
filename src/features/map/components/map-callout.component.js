import { View } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

import { StyledText } from "../../../components/typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
