import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ProfilePost = ({ image, location, title, comments, country, likes }) => {
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
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.content}>
            <FontAwesome
              name="comment"
              size={20}
              style={{ color: comments > 0 ? "#ff6c01" : "#b7b0b0" }}
              onPress={getCommentsHandler}
            />

            <Text style={{ color: comments > 0 ? "#ff6c01" : "#b7b0b0" }}>
              {comments}
            </Text>
          </View>
          <View style={styles.contentLike}>
            <EvilIcons
              name="like"
              size={26}
              style={{ color: likes > 0 ? "#ff6c01" : "#b7b0b0" }}
            />
            <Text>{likes}</Text>
          </View>
        </View>
        <Pressable style={styles.content}>
          <EvilIcons name="location" size={24} color="#b7b0b0" />

          <Text onPress={getMapHandler} style={styles.locationText}>
            {country}
          </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  contentLike: {
    marginLeft: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    textDecorationColor: "grey",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default ProfilePost;
