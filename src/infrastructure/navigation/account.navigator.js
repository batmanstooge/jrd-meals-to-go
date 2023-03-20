import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const AuthStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="authentication"
        component={() => (
          <View>
            <Text>Authentication</Text>
          </View>
        )}
      />
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
