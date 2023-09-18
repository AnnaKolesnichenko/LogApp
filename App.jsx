import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import Home from "./src/screens/Home";
// import PostsScreen from "./src/screens/PostsScreen";
// import CreatePostsScreen from "./src/screens/CreatePostsScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();
// const BottomTabs = createBottomTabNavigator();

// export const BottomNavigation = () => {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={{
//         tabBarStyle: { backgroundColor: "red", padding: 10, marginBottom: 100 },
//         headerRight: () => {
//           return (
//             <View>
//               <Text>Iiiiii</Text>
//             </View>
//           );
//         },
//       }}
//     >
//       <BottomTabs.Screen name="Posts" component={PostsScreen} />
//       <BottomTabs.Screen name="Create Posts" component={CreatePostsScreen} />
//       <BottomTabs.Screen name="Profile" component={ProfileScreen} />
//     </BottomTabs.Navigator>
//   );
// };

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          {/* <Stack.Screen
            name="Tabs"
            component={BottomNavigation}
            options={{ title: "Home" }}
          /> */}
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
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
            screenOptions={{
              headerTransparent: true,
              headerShown: false,
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
          <Stack.Screen name="Home" component={Home} />
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
