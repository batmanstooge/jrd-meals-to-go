import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { AccountScreen } from "../../features/account/screens/account.screen";

const AuthStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="authentication" component={AccountScreen} />
      <AuthStack.Screen
        name="login"
        component={() => (
          <View>
            <Text>Login</Text>
          </View>
        )}
      />
    </AuthStack.Navigator>
  );
};
