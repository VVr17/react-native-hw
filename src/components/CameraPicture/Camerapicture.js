import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";
import { Snap } from "./Snap";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { PreloadedPicture } from "./PreloadedPicture";

export const CameraPicture = ({ pictureUri, setPictureUri }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);

      setPictureUri(uri);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission === null && <View />}
      {hasPermission === false && (
        <Text style={{ color: `${theme.colors.placeholder}`, fontSize: 16 }}>
          No access to camera
        </Text>
      )}

      <View style={styles.preview}>
        <Camera style={styles.camera} ref={setCameraRef}>
          <Snap onClick={takePicture} />
        </Camera>
        {pictureUri && <PreloadedPicture pictureUri={pictureUri} />}
      </View>

      <Text style={{ color: `${theme.colors.placeholder}`, fontSize: 16 }}>
        {pictureUri ? "Редактировать" : "Загрузите"} фото
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    color: `${theme.colors.placeholder}`,
  },

  preview: {
    position: "relative",
    height: 240,
    width: "auto",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: `${theme.colors.inputBackground}`,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    marginBottom: 8,
  },

  camera: {
    height: 240,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
