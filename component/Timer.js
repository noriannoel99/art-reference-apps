import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Timer({ durations, onTimeout }) {
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);
  const [remainingTime, setRemainingTime] = useState(selectedDuration);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (!isPaused && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); // Update every 1 second
    }

    if (remainingTime === 0) {
      onTimeout();
    }

    return () => clearInterval(timer);
  }, [remainingTime, onTimeout, isPaused]);

  const handlePauseResume = () => {
    setIsPaused((prevState) => !prevState);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    setRemainingTime(duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pauseButton} onPress={handlePauseResume}>
        <TouchableOpacity
          style={styles.pauseButton}
          onPress={handlePauseResume}
        >
          {isPaused ? (
            <FontAwesome name="play" size={25} color="black" />
          ) : (
            <FontAwesome name="pause" size={25} color="black" />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.midcontainer}>
        <Text style={styles.timer}>{formatTime(remainingTime)}</Text>
        <Picker
          selectedValue={selectedDuration}
          onValueChange={handleDurationChange}
          style={styles.picker}
        >
          {durations.map((duration) => (
            <Picker.Item
              key={duration}
              label={`${duration} seconds`}
              value={duration}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  midcontainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  timer: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
  },
  picker: {
    marginTop: -20,
    width: 170,
    height: 30,
  },
  pauseButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 123, 255, 0)",
    borderRadius: 5,
  },
  pauseButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
