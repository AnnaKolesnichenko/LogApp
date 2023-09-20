import { View, Text, Image, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Post = ({ image, location, title, comments }) => {
  console.log(comments);
  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image source={{ uri: image }} style={styles.image}></Image>
        <Text style={styles.imageText}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.content}>
          <EvilIcons name="comment" size={24} color="#b7b0b0" />
          <Text style={{ color: comments > 0 ? "black" : "#b7b0b0" }}>
            {comments}
          </Text>
        </View>
        <View style={styles.content}>
          <EvilIcons name="location" size={24} color="#b7b0b0" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: 360,
    height: 250,
    borderRadius: 10,
  },
  imageText: {
    marginTop: 10,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  content: {
    flexDirection: "row",
    gap: 5,
  },
  locationText: {
    textDecorationColor: "grey",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default Post;
