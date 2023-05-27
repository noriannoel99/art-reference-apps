import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import ButtonComponent from "./ButtonComponent";
import Timer from "./Timer";
import {
  animalImages,
  feetImages,
  fullbodyImages,
  handImages,
  headImages,
} from "../images";

export default function ImageArrayComponent({ option }) {
  const images =
    option === "Fullbody"
      ? fullbodyImages
      : option === "Hand"
      ? handImages
      : option === "Feet"
      ? feetImages
      : option === "Head"
      ? headImages
      : option === "Animal"
      ? animalImages
      : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    shuffleImages(); // Shuffle the images array when the component mounts
  }, []);

  const shuffleImages = () => {
    // Create a copy of the images array and shuffle it using the Fisher-Yates algorithm
    const shuffledArray = [...images];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setCurrentIndex(0); // Reset the currentIndex to 0
    setShuffledImages(shuffledArray); // Update the shuffledImages state with the shuffled array
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTimeout = () => {
    if (currentIndex < shuffledImages.length - 1) {
      goToNext();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={shuffledImages[currentIndex]} style={styles.image} />
      </View>
      <View style={styles.Bottomcontainer}>
        <View style={styles.timerContainer}>
          <Timer durations={[60, 120, 180]} onTimeout={handleTimeout} />
        </View>
        <View style={styles.buttonContainer}>
          {currentIndex < shuffledImages.length - 1 && (
            <ButtonComponent onPress={goToNext} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Bottomcontainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    width: 500,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
