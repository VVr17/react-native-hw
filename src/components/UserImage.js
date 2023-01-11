import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { theme } from "../constants/theme";
import { AddButton } from "./UI-kit/AddButton";

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
        {/* <Image
          source={require("../assets/images/template.jpg")}
          style={styles.image}
        /> */}
        <AddButton isActive={isActive} />
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
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
  },
});

/* <Image
        source={require("../assets/images/bgImage.png")}
              style={{
        ...styles.imageWrapper,
        left: (width - 120) / 2,
      }}
      /> */
