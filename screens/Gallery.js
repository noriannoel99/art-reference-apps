import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  animalImages,
  feetImages,
  fullbodyImages,
  handImages,
  headImages,
} from "../images";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Full Body</Text>
          <ScrollView horizontal>
            {fullbodyImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Hand</Text>
          <ScrollView horizontal>
            {handImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image key={index} source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Feet</Text>
          <ScrollView horizontal>
            {feetImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image key={index} source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Head</Text>
          <ScrollView horizontal>
            {headImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image key={index} source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Animal</Text>
          <ScrollView horizontal>
            {animalImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image key={index} source={image} style={styles.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <Modal visible={selectedImage !== null} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={selectedImage} style={styles.modalImage} />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 200,
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalImage: {
    flex: 1,
    resizeMode: "contain",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
