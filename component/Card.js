import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Card({ title, onPress, image }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden", // Ensures the image stays within the card boundaries
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
