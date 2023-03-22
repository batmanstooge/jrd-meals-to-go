import AnimatedLottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
      <AnimatedLottieView
        autoPlay
        key="animation"
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
    </AnimationWrapper>
    <Title>Meals to Go</Title>
    <AccountContainer>
      <AuthButton
        mode="contained"
        icon="login"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
