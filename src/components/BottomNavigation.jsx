import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import PostsScreen from "../screens/PostsScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "transparent" },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { backgroundColor: "white", padding: 10 },
        headerRight: () => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <MaterialIcons name="logout" size={24} color="orange" />
              </TouchableOpacity>
            </View>
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Create Posts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIcon}>
              <Octicons
                name="person"
                size={24}
                color={color}
                style={({ pressed }) => pressed && styles.pressed}
              />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pressed: {
    backgroundColor: "orange",
    color: "white",
  },
});

export default BottomNavigation;
