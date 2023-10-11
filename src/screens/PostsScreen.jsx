import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Post from "../components/Post";
import ProfileStart from "../components/ProfileStart";
//import dummy_data from "../data/dummy_data";
import { getPostData } from "../data/fetchDB";
import { useDispatch, useSelector } from "react-redux";
import { addPost, setPosts } from "../../store/postsReducer";

const PostsScreen = () => {
  //const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const dataSelect = useSelector((state) => state.posts.posts);
  console.log(dataSelect);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostData();
      dispatch(setPosts(posts));
    };
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {dataSelect && dataSelect.length > 0 ? (
        <>
          <ProfileStart />
          <FlatList
            data={dataSelect}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Post
                id={item.id}
                title={item.title}
                image={item.image}
                comments={item.comments}
                location={item.location}
                country={item.country}
                locationDataInfo={item.locationDataInfo}
              />
            )}
            showsVerticalScrollIndicator={false}
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
    backgroundColor: "white",
  },
});

export default PostsScreen;
