import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import backImage from "../images/pic.jpg";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import InputType from "../components/InputType";

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [passVisible, setPassVisible] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setLogin("");
  };

  const getInputData = () => {
    console.log({ email, login, password });
    clearInputs();
    navigation.navigate("Home", {});
  };

  const pressHandler = () => {
    navigation.navigate("Login", {});
  };

  const showPassword = () => {
    setPassVisible(!passVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-200}
      >
        <View style={styles.container}>
          <ImageBackground style={styles.mainScreen} source={backImage}>
            <View style={styles.registrationContainer}>
              <View style={styles.plusSquare}>
                <Pressable style={styles.plusPressed}>
                  <AntDesign name="pluscircleo" size={26} color="orange" />
                </Pressable>
              </View>
              <Text style={styles.registrationTitle}>Реєстрація</Text>

              <InputType
                value={login}
                onChangeText={setLogin}
                placeholder={"Логін"}
                keyboardType={"default"}
              />

              <InputType
                value={email}
                onChangeText={setEmail}
                placeholder={"Адреса електронної пошти"}
                keyboardType={"email-address"}
              />

              <View style={styles.showPassInput}>
                <InputType
                  secureTextEntry={!passVisible}
                  value={password}
                  onChangeText={setPassword}
                  placeholder={"Пароль"}
                  keyboardType={"visible-password"}
                  autoCapitalize={"none"}
                />
                <TouchableOpacity
                  style={styles.toggleButton}
                  onPress={showPassword}
                >
                  <Text style={styles.toggleButtonText}>
                    {!passVisible ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.outerContainer}>
                <Pressable
                  onPress={getInputData}
                  style={({ pressed }) => [
                    styles.registerBtn,
                    pressed && { opacity: 0.6 },
                  ]}
                >
                  <View>
                    <Text style={styles.registerBtnStyle}>Зареєструватися</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.pressableLine}>
                <Pressable onPress={pressHandler}>
                  <Text style={styles.pressable}>Вже є аккаунт? Увійти</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
  registrationContainer: {
    backgroundColor: "white",
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 16,
    bottom: 0,
    height: 549,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  registrationTitle: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
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
  addBtn: {
    // position: "absolute",
    // right: "-10%",
    // bottom: 20,
    width: 27,
    height: 27,
    backgroundColor: "#f9f4f4",
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 15,
  },

  outerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  pressableLine: {
    marginTop: 20,
  },
  showPassInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  toggleButton: {
    paddingHorizontal: 15,
    paddingTop: 10,
    position: "absolute",
    right: 0,
  },
  toggleButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3d4044",
  },
});

export default RegistrationScreen;
