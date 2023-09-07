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
} from "react-native";

import backImage from "../images/pic.jpg";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const data = {
    email: emailText,
    pass: passwordText,
  };

  const pressHandler = () => {
    navigation.navigate("Registration");
  };

  const getInputData = () => {
    console.log(emailText, passwordText);
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
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              value={emailText}
              onChangeText={setEmailText}
              // onSubmitEditing={() => console.log(emailText)}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              keyboardType="visible-password"
              placeholder="Пароль"
              value={passwordText}
              onChangeText={setPasswordText}
              // onSubmitEditing={() => console.log(passwordText)}
            />
            <View style={styles.registerBtn}>
              <Pressable onPress={getInputData}>
                <Text style={styles.registerBtnStyle}>Увійти</Text>
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
  plusPressed: {
    position: "absolute",
    bottom: 20,
    right: -10,
  },
  plusSquare: {
    width: 140,
    height: 140,
    position: "relative",
    marginTop: -260,
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
  input: {
    marginTop: 15,
    padding: 10,
    width: "95%",
    height: 50,
    backgroundColor: "#f9f4f4",
    borderColor: "#ede8e8",
    borderWidth: 1,
    borderRadius: 10,
  },
  registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    paddingHorizontal: 35,
    paddingVertical: 10,
    width: "95%",
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
});

export default LoginScreen;
