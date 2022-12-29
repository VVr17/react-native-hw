import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export const ExtraButton = ({ extraStyles, children, onClick }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.extraButton, ...extraStyles }}
      activeOpacity={0.6}
      onPress={onClick}
    >
      <Text style={styles.extraButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  extraButton: {
    backgroundColor: "transparent",
  },

  extraButtonText: {
    color: `${theme.colors.secondaryAccent}`,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
