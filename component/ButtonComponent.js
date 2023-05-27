import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ButtonComponent({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name="arrow-right" size={35} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 123, 255, 0)",
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
