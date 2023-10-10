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
  Alert,
} from "react-native";

import backImage from "../images/pic.jpg";
import { useState } from "react";

import InputType from "../components/InputType";
import { signInUser } from "../data/fetchAuth";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store/authReducer";

const LoginScreen = ({ navigation }) => {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [isUserLogging, setIsUserLogging] = useState(false);

  const tokenSelected = useSelector((state) => state.authenticate.token);
  const dispatch = useDispatch();
  console.log(tokenSelected);

  const signInHandler = async (email, password) => {
    setIsUserLogging(true);
    try {
      const token = await signInUser(email, password);
      dispatch(authenticate(token));
    } catch (error) {
      Alert.alert(
        "Login failed...",
        "Something went wrong, check your login or password and try again"
      );
    }
    setIsUserLogging(false);
  };

  const clearInputs = () => {
    setEmailText("");
    setPasswordText("");
  };

  const pressHandler = () => {
    navigation.navigate("Registration");
  };

  const getInputData = () => {
    if (emailText.trim() === "" || passwordText.trim() === "") {
      Alert.alert("Invalid input", "Please check your entered data");
      setEmailText("");
      setPasswordText("");
      clearInputs();
      return;
    }
    signInHandler(emailText, passwordText);
    clearInputs();
    navigation.navigate("Home", {});
  };

  const showPassword = () => {
    setPassVisible(!passVisible);
  };

  if (isUserLogging) {
    return <Loader message="User is being logged in..." />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={-50}
      >
        <ImageBackground style={styles.mainScreen} source={backImage}>
          <View style={styles.loginContainer} onSubmi>
            <Text style={styles.loginTitle}>Увійти</Text>

            <InputType
              value={emailText}
              onChangeText={setEmailText}
              placeholder={"Адреса електронної пошти"}
              keyboardType={"email-address"}
            />
            <View style={styles.showPassInput}>
              <InputType
                secureTextEntry={!passVisible}
                value={passwordText}
                onChangeText={setPasswordText}
                placeholder={"Пароль"}
                keyboardType={"default"}
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
  showPassInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

export default LoginScreen;
