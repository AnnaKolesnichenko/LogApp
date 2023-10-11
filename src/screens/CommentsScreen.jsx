import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost } from "../../store/postsReducer";

const CommentsScreen = ({ navigation, route }) => {
  const { imageUri, id } = route.params;

  const [inputVal, setInputVal] = useState("");
  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  const commentsHandler = () => {
    setComments((prevState) => [...prevState, inputVal]);
    dispatch(addCommentToPost(id, comments));
    setInputVal("");
  };

  const renderItem = ({ item, index }) => {
    const evenIndex = index % 2 === 0;
    const itemStyled = evenIndex ? styles.even : styles.odd;

    function formatDate(date) {
      const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return date.toLocaleString("en-US", options);
    }
    const date = new Date();
    const formatted = formatDate(date);

    return (
      <View style={[styles.commentContainer, itemStyled]}>
        <Image source={{ uri: imageUri }} style={styles.commentIcon} />
        <View style={styles.commentText}>
          <Text>{item}</Text>
          <Text style={styles.date}>{formatted}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={130}
        style={styles.container}
      >
        <Image source={{ uri: imageUri }} style={styles.image} />

        <FlatList
          style={{ width: "100%", marginTop: 15 }}
          data={comments}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />

        <View style={styles.commentinput}>
          <TextInput
            placeholder="Add a comment..."
            onChangeText={setInputVal}
            value={inputVal}
          />
          <View style={styles.icon}>
            <Ionicons
              name="arrow-up-outline"
              size={28}
              color="white"
              onPress={commentsHandler}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  commentsContainer: {
    flex: 1,
    marginTop: 130,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 390,
    height: 250,
    borderRadius: 10,
    marginTop: 40,
  },
  commentinput: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    width: "90%",
    padding: 7,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 25,
  },
  icon: {
    padding: 5,
    backgroundColor: "orange",
    borderRadius: 100,
  },
  odd: {
    alignSelf: "flex-end",
  },
  even: {
    alignSelf: "flex-start",
  },
  commentText: {
    padding: 10,
    backgroundColor: "#f6f6f6",
    borderRadius: 5,
  },
  commentContainer: {
    maxWidth: "90%",
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    gap: 10,
  },
  commentIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  date: {
    fontSize: 12,
    color: "grey",
    marginTop: 5,
  },
});

export default CommentsScreen;
