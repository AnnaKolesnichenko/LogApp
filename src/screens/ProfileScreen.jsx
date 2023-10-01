import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import ProfilePost from "../components/ProfilePost";
import backImage from "../images/pic.jpg";
import dummy_data from "../data/dummy_data.json";

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: "Profile",
    });
    setProfileImg();
  }, []);

  const photo =
    "https://play-lh.googleusercontent.com/_GWAfXc8AQtfIsYAd5dlEDmc1mostQR51CiH_3ipq2r9fBFjYcvk1CdwJielLtkkfED3";

  const setProfileImg = () => {
    setImage(photo);
  };

  return (
    <>
      <ImageBackground style={styles.mainScreen} source={backImage}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.plusSquare}
            // onPress={handleImagePicker}
          >
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
            {image ? (
              <Pressable style={styles.crossBtn}>
                <Entypo name="cross" size={24} color="#cccccc" />
              </Pressable>
            ) : (
              <Pressable style={styles.plusPressed}>
                <AntDesign name="pluscircleo" size={26} color="orange" />
              </Pressable>
            )}
          </TouchableOpacity>
          <Text style={styles.profileTitle}>Mermaid of The Sea</Text>

          <FlatList
            data={dummy_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProfilePost
                title={item.title}
                image={item.image}
                comments={item.comments}
                location={item.location}
                country={item.country}
                likes={item.likes}
              />
            )}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  plusPressed: {
    position: "absolute",
    bottom: 20,
    right: -10,
  },
  plusSquare: {
    width: 140,
    height: 140,
    position: "fixed",
    marginTop: -90,
    zIndex: 99,
    backgroundColor: "#f9f4f4",
    borderWidth: 1,
    borderColor: "#f9f4f4",
    borderRadius: 16,
  },
  crossBtn: {
    position: "absolute",
    bottom: 20,
    right: -10,
    padding: 2,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  mainScreen: {
    flex: 1,
    position: "relative",
    resizeMode: "contain",
    zIndex: -1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    paddingHorizontal: 5,
    backgroundColor: "white",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 5,
  },

  // outerContainer: {
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  profileList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  // registerBtn: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 35,
  //   paddingHorizontal: 35,
  //   paddingVertical: 10,
  //   width: "100%",
  //   height: 50,
  //   borderRadius: 25,
  //   textAlign: "center",
  //   backgroundColor: "#FF6C00",
  // },
  // registerBtnStyle: {
  //   color: "white",
  // },
  // pressableLine: {
  //   marginTop: 20,
  // },
  // underlined: {
  //   textDecorationLine: "underline",
  // },
  // pressedBtn: {
  //   opacity: 0.6,
  // },
  // showPassInput: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: "100%",
  // },
  // toggleButton: {
  //   paddingHorizontal: 15,
  //   paddingTop: 10,
  //   position: "absolute",
  //   right: 0,
  // },
  // toggleButtonText: {
  //   fontSize: 12,
  //   fontWeight: "600",
  //   color: "#3d4044",
  // },
});

export default ProfileScreen;
