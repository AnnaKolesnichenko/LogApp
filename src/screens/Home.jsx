import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text>HomeScreen</Text>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

export default Home;
