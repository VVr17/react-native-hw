import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const Button = ({ onSubmit, children }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onSubmit}
    >
      <Text style={styles.buttonTitle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: `${theme.colors.accent}`,
    padding: 12,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonTitle: {
    color: `${theme.colors.mainBackground}`,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
