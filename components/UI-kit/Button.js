import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { theme } from "../../constants/theme";

export const Button = ({ onSubmit, children }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor={`${theme.colors.active}`}
      onPress={onSubmit}
    >
      <Text style={styles.buttonTitle}>{children}</Text>
    </TouchableHighlight>
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
