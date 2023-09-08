import { StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

const LoginTextInput = ({ value, onChangeText }) => {
  const [loginFocused, setLoginFocused] = useState(false);
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: loginFocused ? "#FF6C00" : "#ede8e8",
          backgroundColor: loginFocused ? "white" : "#f9f4f4",
        },
      ]}
      keyboardType="default"
      placeholder="Логін"
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setLoginFocused(true)}
      onBlur={() => setLoginFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    padding: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#f9f4f4",
    borderColor: "#ede8e8",
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default LoginTextInput;
