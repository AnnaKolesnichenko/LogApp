import { StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

const PasswordTextInput = ({ value, onChangeText }) => {
  const [passFocused, setPassFocused] = useState(false);
  const [passVisible, setPassVisible] = useState(true);

  const showPassword = () => {
    setPassVisible(!passVisible);
  };

  return (
    <View style={styles.showPassInput}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: passFocused ? "#FF6C00" : "#ede8e8",
            backgroundColor: passFocused ? "white" : "#f9f4f4",
          },
        ]}
        keyboardType="visible-password"
        placeholder="Пароль"
        value={value}
        secureTextEntry={passVisible}
        onChangeText={onChangeText}
        onFocus={() => setPassFocused(true)}
        onBlur={() => setPassFocused(false)}
      />
      <TouchableOpacity style={styles.toggleButton} onPress={showPassword}>
        <Text style={styles.toggleButtonText}>
          {passVisible ? "Показати" : "Сховати"}
        </Text>
      </TouchableOpacity>
    </View>
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
  showPassInput: {
    flexDirection: "row",
    alignItems: "center",
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

export default PasswordTextInput;
