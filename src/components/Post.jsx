import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LocationIdentifier from "./LocationIdentifier";

const Post = ({ image, location, title, comments }) => {
  const navigation = useNavigation();

  const getCommentsHandler = () => {
    navigation.navigate("Коментарі", { imageUri: image });
  };

  const getMapHandler = () => {
    navigation.navigate("Мапа", { title: "Мапа" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image source={{ uri: image }} style={styles.image}></Image>
        <Text style={styles.imageText}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.content}>
          <EvilIcons
            name="comment"
            size={24}
            color="#b7b0b0"
            onPress={getCommentsHandler}
          />
          <Text style={{ color: comments > 0 ? "black" : "#b7b0b0" }}>
            {comments}
          </Text>
        </View>
        <Pressable style={styles.content}>
          <EvilIcons
            name="location"
            size={24}
            color="#b7b0b0"
            onPress={getMapHandler}
          />

          <Text style={styles.locationText}>{location}</Text>
        </Pressable>
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
