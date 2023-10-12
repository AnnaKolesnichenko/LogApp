import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { EvilIcons, FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

import { StackActions } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { sendPosts } from "../data/fetchDB";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/postsReducer";
import Loader from "../components/Loader";

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [locationDataInfo, setLocationDataInfo] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);

  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const popAction = StackActions.pop(1);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  useEffect(() => {
    if (!isFocused) {
      setImage(null);
      setTitle("");
      setLocation("");
      setLocationDataInfo(null);
    }
  }, [isFocused]);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to the cemare</Text>;
  }

  const changeCameraType = () => {
    setType((prevState) =>
      prevState === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const getLocationData = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("No location permissions given");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      const currentLocationData = {
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      };
      const data = `${currentLocationData.lat}, ${currentLocationData.lng}`;
      return data;
    } catch (error) {
      console.error("Error getting location", error);
      return;
    }
  };

  const takePictureHandler = async () => {
    if (cameraRef) {
      setPhotoLoading(true);
      setPhotoTaken(true);
      try {
        const { uri } = await cameraRef.takePictureAsync();
        setImage(uri);

        const locationData = await getLocationData();
        if (locationData) {
          setLocationDataInfo(locationData);
        }
        await MediaLibrary.createAssetAsync(uri);
      } catch (error) {
        console.error("Error making the photo", error);
      }
      setPhotoLoading(false);
      // setPhotoTaken(false);
    }
  };

  if (photoLoading) {
    return <Loader message="Wait...we are making a photo." />;
  }

  const getInputData = async () => {
    try {
      const locationData = await getLocationData();
      if (locationData) {
        const postData = {
          title,
          location,
          image,
          locationDataInfo: locationData,
        };
        dispatch(addPost(postData));
        sendPosts(postData);
        navigation.navigate("Публікації", { data: postData });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCreatedPost = () => {
    // navigation.navigate("Публікації");
    setImage(null);
    setLocation("");
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backwards}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressedLogout}
          onPress={() => {
            navigation.navigate("Публікації");
            navigation.dispatch(StackActions.popToTop());
            // navigation.pop();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="grey" />
        </Pressable>
      </View>
      <View style={styles.preview}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Camera style={styles.photoContainer} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={changeCameraType}
              >
                <Pressable
                  onPress={takePictureHandler}
                  style={styles.makePhotoBtn}
                  disabled={photoTaken}
                >
                  <Feather name="camera" size={24} color="black" />
                </Pressable>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
        <View style={styles.changePhoto}>
          <Text style={{ textAlign: "left", color: "#b7b0b0" }}>
            {image ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Назва..."
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight: 20, top: 25 }}>
          <EvilIcons name="location" size={24} color="#b7b0b0" />
        </TouchableOpacity>
        <TextInput
          placeholder="Місцевість"
          value={location}
          onChangeText={setLocation}
          style={[styles.inputStyle, { marginLeft: -40, paddingLeft: 30 }]}
        ></TextInput>
      </View>
      <View style={styles.outerContainer}>
        {image && title && location ? (
          <Pressable
            onPress={getInputData}
            style={({ pressed }) => [
              styles.registerBtn,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Text style={styles.registerBtnStyle}>Опубліковати</Text>
          </Pressable>
        ) : (
          <Pressable
            // onPress={getInputData}
            style={[styles.registerBtn, { backgroundColor: "#f6f6f6" }]}
            disabled
          >
            <Text style={[styles.registerBtnStyle, { color: "#ccc9c9" }]}>
              Опублікувати
            </Text>
          </Pressable>
        )}
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.trash} onPress={deleteCreatedPost}>
          <FontAwesome
            name="trash-o"
            size={24}
            color={image && location && title ? "orange" : "#b7b0b0"}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  camera: {
    // flex: 1,
    height: 300,
  },
  makePhotoBtn: {
    backgroundColor: "white",
    padding: 15,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 50,
    position: "absolute",
    top: -125,
    opacity: 0.3,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 7,
  },
  flipContainer: {
    flex: 0.15,
    alignSelf: "flex-end",
  },
  photoContainer: {
    flex: 1,
    height: 260,
    width: "100%",
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc9c9",
  },
  photoText: {
    color: "#b7b0b0",
    marginTop: 15,
    marginBottom: 30,
  },
  changePhoto: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 5,
  },
  preview: {
    flex: 1,
    width: "100%",
    height: 300,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    paddingHorizontal: 35,
    paddingVertical: 10,
    width: "100%",
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    backgroundColor: "#FF6C00",
  },
  registerBtnStyle: {
    color: "white",
  },

  // camera: {
  //   padding: 14,
  //   backgroundColor: "white",
  //   borderRadius: 50,
  //   zIndex: 100,
  // },

  inputStyle: {
    marginTop: 15,
    padding: 10,
    width: "100%",
    height: 50,
    borderBottomColor: "#ccc9c9",
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  trash: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 110,
    marginBottom: 20,
    padding: 10,
    width: 80,
    backgroundColor: "#f6f6f6",
    borderRadius: 40,
  },
});

export default CreatePostsScreen;
