import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { AddButton } from "./UI-kit/AddButton";
import { theme } from "../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome5";

export const UserImage = ({ isActive }) => {
  const [{ width }, setDimensions] = useState({
    width: Dimensions.get("window").width,
  });

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions({ width });
    };

    const dimensionsHandler = Dimensions.addEventListener("change", onChange);
    return () => dimensionsHandler.remove();
  }, []);

  return (
    <>
      <View
        style={{
          ...styles.imageWrapper,
          left: (width - 120) / 2,
        }}
      >
        <Icon name="house-user" color={theme.colors.accent} size={50} />
        {/* <AddButton isActive={isActive} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    position: "absolute",
    top: -120 / 2,

    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
  },
});
