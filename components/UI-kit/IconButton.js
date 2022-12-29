import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { theme } from "../../constants/theme";

export const IconButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={styles.iconWrapper}
      activeOpacity={0.6}
      onPress={onClick}
    >
      <Image
        source={require("../../assets/icons/plus.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    position: "absolute",
    right: -(25 / 2),
    bottom: 14,
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: `${theme.colors.accent}`,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 13,
    height: 13,
  },
});
