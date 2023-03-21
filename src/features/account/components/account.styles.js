import { View } from "react-native";
import { ImageBackground } from "react-native";
import styled from "styled-components";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
