import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            screenOptions={{
              title: "",
              headerTransparent: true,
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            screenOptions={{
              title: "",
              headerTransparent: true,
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
            s
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
