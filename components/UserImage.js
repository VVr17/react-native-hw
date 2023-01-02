import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "../constants/theme";
import { IconButton } from "./UI-kit/IconButton";

export const UserImage = () => {
  const [{ width }, setDimensions] = useState({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      const height = Dimensions.get("window").height;
      setDimensions({ width, height });
    };

    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <View
      style={{
        ...styles.imageWrapper,
        left: (width - 120) / 2,
      }}
    >
      <IconButton />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: "absolute",
    top: -120 / 2,

    width: 120,
    height: 120,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 16,
  },
});
