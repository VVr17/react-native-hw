import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { ExtraButton } from "./ExtraButton";
import { theme } from "../../constants/theme";

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
  const [isFocused, setIsFocused] = useState(false);
  const [isSecured, setIsSecured] = useState(isPassword);

  const handleFocus = () => {
    onInputFocus();
    setIsFocused(true);
  };

  return (
    <View
      style={{
        ...styles.inputWrapper,
        marginBottom:
          isLast && isKeyboardShown ? 0 : isLast && !isKeyboardShown ? 43 : 16,
      }}
    >
      <TextInput
        style={{
          ...styles.input,
          borderColor: isFocused
            ? `${theme.colors.accent}`
            : `${theme.colors.border}`,
        }}
        onChangeText={onInputChange}
        value={value}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={isSecured}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />
      {hasExtraButton && (
        <ExtraButton
          extraStyles={styles.inputButton}
          onClick={() => {
            setIsSecured((prev) => !prev);
          }}
        >
          Показать
        </ExtraButton>
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
    fontFamily: "Roboto-Regular",
  },

  inputButton: {
    position: "absolute",
    top: 19,
    right: 16,
  },
});
