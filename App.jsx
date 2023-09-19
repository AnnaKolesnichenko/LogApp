import { Pressable, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import "react-native-gesture-handler";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
// import HomeScreen from "./src/screens/HomeScreen.jsx";
import PostsScreen from "./src/screens/PostsScreen";
import CreatePostsScreen from "./src/screens/CreatePostsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { useState } from "react";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "transparent" },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 10,
        },
        tabBarLabel: "",
      })}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerRight: ({ color }) => {
            return (
              <View style={styles.logOut}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedLogout}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <MaterialIcons name="logout" size={22} color="grey" />
                </Pressable>
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                  navigation.navigate("Posts");
                }}
              >
                <Ionicons name="grid-outline" size={22} color={color} />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTabs.Screen
        name="Create Posts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerRight: ({ color }) => {
            return (
              <View style={styles.logOut}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedLogout}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <MaterialIcons name="logout" size={22} color="grey" />
                </Pressable>
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                  navigation.navigate("Create Posts");
                }}
              >
                <AntDesign name="plus" size={22} color={color} />
              </Pressable>
            </View>
          ),
        })}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          headerRight: ({ color }) => {
            return (
              <View style={styles.logOut}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedLogout}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <MaterialIcons name="logout" size={22} color="grey" />
                </Pressable>
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Octicons name="person" size={22} color={color} />
              </Pressable>
            </View>
          ),
        })}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
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
    </>
  );
}

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
