import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomNavigation from "./BottomTabsRoot";
const Stack = createStackNavigator();

const MainRootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ navigation }) => ({
          headerTransparent: true,
          // title: "",
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          },
        })}
      >
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
          screenOptions={{
            headerTransparent: true,
            headerShown: false,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
          screenOptions={{
            headerTransparent: true,
            headerShown: false,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 10,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    color: "white",
    width: 60,
    height: 40,
    color: "white",
  },
  logOut: {
    // marginTop: 35,
    marginRight: 35,
  },
  pressedLogout: {
    fill: "#FF6C00",
  },
});

export default MainRootNavigation;
