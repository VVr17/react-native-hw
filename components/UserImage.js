import { StyleSheet, View } from "react-native";
import { theme } from "../constants/theme";
import { IconButton } from "./UI-kit/IconButton";

export const UserImage = ({ parentWidth }) => {
  return (
    <View
      style={{
        ...styles.imageWrapper,
        left: (parentWidth - 120) / 2,
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
