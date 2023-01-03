import React, { useState } from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";
import { CameraButton } from "./CameraButton";

export const UploadImage = ({ image }) => {
  const addImage = () => {
    console.log("add photo on Click");
  };

  return (
    <View style={imageUploaderStyles.container}>
      <View style={imageUploaderStyles.imageContainer}>
        <CameraButton onClick={addImage} />
      </View>
      <Text style={{ color: `${theme.colors.placeholder}`, fontSize: 16 }}>
        {image ? "Редактировать" : "Загрузите"} фото
      </Text>
    </View>
  );
};

const imageUploaderStyles = StyleSheet.create({
  container: {
    marginBottom: 32,
    color: `${theme.colors.placeholder}`,
  },

  imageContainer: {
    height: 240,
    width: "auto",
    backgroundColor: `${theme.colors.inputBackground}`,
    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
