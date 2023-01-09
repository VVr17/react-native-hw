import { Dimensions, Image, StyleSheet, View } from "react-native";

const dimensions = Dimensions.get("window");

export const PreloadedPicture = ({ pictureUri }) => {
  return (
    <View style={styles.pictureContainer}>
      <Image
        source={{ uri: pictureUri }}
        alt="made picture"
        resizeMode={"cover"}
        style={{ height: 240 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pictureContainer: {
    position: "absolute",
    height: 240,
    width: dimensions.width,
    top: 0,
    left: 0,
  },
});
