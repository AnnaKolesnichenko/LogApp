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

import EmailTextInput from "../components/TextInputs/EmailTextInput";
import PasswordTextInput from "../components/TextInputs/PasswordTextInput";

const LoginScreen = ({ navigation }) => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const pressHandler = () => {
    navigation.navigate("Registration");
  };

  const getInputData = () => {
    console.log({ emailText, passwordText });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground style={styles.mainScreen} source={backImage}>
          <View style={styles.loginContainer} onSubmi>
            <Text style={styles.loginTitle}>Увійти</Text>

            <EmailTextInput value={emailText} onChangeText={setEmailText} />

            <PasswordTextInput
              value={passwordText}
              onChangeText={setPasswordText}
            />

            <View style={styles.outerContainer}>
              <Pressable
                onPress={getInputData}
                style={({ pressed }) => [
                  styles.registerBtn,
                  pressed && { opacity: 0.6 },
                ]}
              >
                <View>
                  <Text style={styles.registerBtnStyle}>Увійти</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.pressableLine}>
              <Pressable onPress={pressHandler}>
                <Text style={styles.pressable}>
                  Немає акаунту?{" "}
                  <Text style={[styles.pressable, styles.underlined]}>
                    Зареєструватися
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
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
  loginContainer: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  loginTitle: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
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
  underlined: {
    textDecorationLine: "underline",
  },
  pressedBtn: {
    opacity: 0.6,
  },
});

export default LoginScreen;
