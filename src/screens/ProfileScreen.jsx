import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }) => {
  const title = route.name;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Profile",
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    marginTop: 30,
  },
});

export default ProfileScreen;
