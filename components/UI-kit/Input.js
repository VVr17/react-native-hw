import { TextInput, View, StyleSheet, Text } from "react-native";
import { theme } from "../../constants/theme";
import { ExtraButton } from "../ExtraButton";

export const Input = ({
  isKeyboardShown,
  onInputChange,
  value,
  onInputFocus,
  placeholder,
  hasExtraButton = false,
  isPassword = false,
  isLast = false,
}) => {
  return (
    <View
      style={{
        ...styles.inputWrapper,
        marginBottom:
          isLast && isKeyboardShown ? 0 : isLast && !isKeyboardShown ? 43 : 16,
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={onInputChange}
        value={value}
        onFocus={onInputFocus}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />
      {hasExtraButton && (
        <ExtraButton extraStyles={styles.inputButton}>Показать</ExtraButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
    position: "relative",
  },

  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderColor: `${theme.colors.border}`,
    fontFamily: "Roboto-Regular",
  },

  inputButton: {
    position: "absolute",
    top: 19,
    right: 16,
  },
});
