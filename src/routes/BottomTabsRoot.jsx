import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostsStack from "./PostsStack";
import PostsScreen from "../screens/PostsScreen";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authReducer";

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  const dispatch = useDispatch();
  return (
    <BottomTabs.Navigator
      initialRouteName="Публікації"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "black",
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 10,
        },
        tabBarLabel: "",
      })}
    >
      <BottomTabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerRight: ({ color }) => {
            return (
              <View style={styles.logOut}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedLogout}
                  onPress={() => dispatch(logout())}
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
                  navigation.navigate("Публікації");
                }}
              >
                <Ionicons name="grid-outline" size={22} color={color} />
              </Pressable>
            </View>
          ),
        })}
      />

      <BottomTabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: {
            display: "none",
          },
          headerLeft: ({ color }) => {
            return (
              <View style={styles.backwards}>
                <Pressable
                  style={({ pressed }) => pressed && styles.pressedLogout}
                  onPress={() => {
                    navigation.navigate("Публікації");
                    navigation.pop();
                  }}
                >
                  <AntDesign name="arrowleft" size={24} color="grey" />
                </Pressable>
              </View>
            );
          },
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                  navigation.navigate("Створити публікацію");
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
          headerShown: false,
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
      {/* <BottomTabs.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <BottomTabs.Screen
        name="Мапа"
        component={MapScreen}
        options={{
          title: "Мапа",
          tabBarStyle: {
            display: "none",
          },
        }}
      /> */}
    </BottomTabs.Navigator>
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
  backwards: {
    marginLeft: 25,
  },
  pressedLogout: {
    fill: "#FF6C00",
  },
});

export default BottomNavigation;
