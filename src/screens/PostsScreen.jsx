import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post";
import ProfileStart from "../components/ProfileStart";
import dummy_data from "../data/dummy_data";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      {dummy_data && dummy_data.length > 0 ? (
        <>
          <ProfileStart />
          <FlatList
            data={dummy_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Post
                title={item.title}
                image={item.image}
                comments={item.comments}
                location={item.location}
              />
            )}
          ></FlatList>
        </>
      ) : (
        <ProfileStart />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#b7b0b0",
    borderTopWidth: 1,
  },
});

export default PostsScreen;
