import { StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

const EmailTextInput = ({ value, onChangeText }) => {
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: emailFocused ? "#FF6C00" : "#ede8e8",
          backgroundColor: emailFocused ? "white" : "#f9f4f4",
        },
      ]}
      keyboardType="email-address"
      placeholder="Адреса електронної пошти"
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setEmailFocused(true)}
      onBlur={() => setEmailFocused(false)}
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

export default EmailTextInput;
