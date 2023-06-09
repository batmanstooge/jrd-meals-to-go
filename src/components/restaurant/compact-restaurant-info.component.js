import { Image, Platform, View } from "react-native";
import WebView from "react-native-webview";

import styled from "styled-components";

import { StyledText } from "../typography/text.component";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const DeviceSpecificImage =
    isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <DeviceSpecificImage source={{ uri: restaurant.photos[0] }} />
      <StyledText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </StyledText>
    </Item>
  );
};
