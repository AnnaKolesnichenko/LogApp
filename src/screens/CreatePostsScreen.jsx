import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const getInputData = () => {
    console.log({ title, location });
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.photoContainer}>
          <View style={styles.camera}>
            <FontAwesome name="camera" size={24} color="#ccc9c9" />
          </View>
        </View>
        <Text style={styles.photoText}>
          {image ? "Редагувати фото" : "Завантажте фото"}
        </Text>
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
            <View>
              <Text style={styles.registerBtnStyle}>Опубліковати</Text>
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={getInputData}
            style={[styles.registerBtn, { backgroundColor: "#f6f6f6" }]}
            disabled
          >
            <View>
              <Text style={[styles.registerBtnStyle, { color: "#ccc9c9" }]}>
                Опублікувати
              </Text>
            </View>
          </Pressable>
        )}
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.trash}>
          <FontAwesome name="trash-o" size={24} color="#b7b0b0" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
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
  photoContainer: {
    height: 260,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc9c9",
  },
  camera: {
    padding: 14,
    backgroundColor: "white",
    borderRadius: 50,
    zIndex: 100,
  },
  photoText: {
    color: "#b7b0b0",
    marginTop: 15,
    marginBottom: 30,
  },
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
    marginTop: 120,
    padding: 10,
    width: 80,
    backgroundColor: "#f6f6f6",
    borderRadius: 40,
  },
});

export default CreatePostsScreen;
