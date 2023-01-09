import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { theme } from "../../constants/theme";

export const Button = ({ onSubmit, children, disabled = false }) => {
  return (
    <TouchableHighlight
      style={{
        ...styles.button,
        backgroundColor: disabled
          ? theme.colors.inputBackground
          : theme.colors.accent,
      }}
      activeOpacity={0.6}
      underlayColor={`${theme.colors.active}`}
      onPress={onSubmit}
    >
      <Text
        style={{
          ...styles.buttonTitle,
          color: disabled
            ? theme.colors.placeholder
            : theme.colors.mainBackground,
        }}
      >
        {children}
      </Text>
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
