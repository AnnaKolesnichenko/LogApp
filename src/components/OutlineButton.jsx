import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OulineButton = ({ icon, color, onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons
        icon={icon}
        color={color}
        style={styles.icon}
        onPress={onPress}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: "#b7b0b0",
    marginTop: 15,
    marginBottom: 30,
  },
});

export default OulineButton;
