import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../component/Card";

export default function HomeScreen({ navigation }) {
  const handleContainerPress = (option) => {
    navigation.navigate("ReferenceImage", { option });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        title="Fullbody"
        onPress={() => handleContainerPress("Fullbody")}
        image={require("../assets/thumbnail/fullbody-thumbnail.jpg")}
      />

      <Card
        title="Head"
        onPress={() => handleContainerPress("Head")}
        image={require("../assets/thumbnail/head-thumbnail.jpg")}
      />

      <Card
        title="Hand"
        onPress={() => handleContainerPress("Hand")}
        image={require("../assets/thumbnail/hand-thumbnail.jpg")}
      />

      <Card
        title="Feet"
        onPress={() => handleContainerPress("Feet")}
        image={require("../assets/thumbnail/feet-thumbnail.jpg")}
      />

      <Card
        title="Animal"
        onPress={() => handleContainerPress("Animal")}
        image={require("../assets/thumbnail/animal-thumbnail.jpg")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  fullbodyContainer: {
    backgroundColor: "#e74c3c",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  handContainer: {
    backgroundColor: "#3498db",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  feetContainer: {
    backgroundColor: "#e74c3c",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headContainer: {
    backgroundColor: "#3498db",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  animalContainer: {
    backgroundColor: "#e74c3c",
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
