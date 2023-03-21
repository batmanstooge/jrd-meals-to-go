import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
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
          icon="login"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
