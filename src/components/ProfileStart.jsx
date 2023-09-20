import photo from "../images/mushroom.jpeg";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileStart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://play-lh.googleusercontent.com/_GWAfXc8AQtfIsYAd5dlEDmc1mostQR51CiH_3ipq2r9fBFjYcvk1CdwJielLtkkfED3",
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>Mermaid of The Sea</Text>
          <Text style={styles.emailText}>mermaid@ofthesea.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    marginLeft: -140,
    alignItems: "center",
    justifyContent: "left",
    gap: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 12,
  },
});

export default ProfileStart;
