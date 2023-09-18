import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const PostsScreen = () => {
  //   const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Text>render something here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
