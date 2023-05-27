import React from "react";
import { View, StyleSheet } from "react-native";
import ImageArrayComponent from "../component/ImageArrayComponent";

export default function ReferenceImage({ route }) {
  const { option } = route.params;

  return (
    <View style={styles.container}>
      <ImageArrayComponent option={option} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
