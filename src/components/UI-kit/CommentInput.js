import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { CommentButton } from "./CommentButton";
import { theme } from "../../constants/theme";

export const CommentInput = ({
  onInputChange,
  value,
  placeholder,
  onSubmit,
  onInputFocus,
  isLoading,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    onInputFocus();
    setIsFocused(true);
  };

  return (
    <View style={styles.inputWrapper}>
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
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />
      <CommentButton onClick={onSubmit} isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
  },

  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 100,
    fontSize: 16,
    backgroundColor: `${theme.colors.inputBackground}`,
    fontFamily: "Roboto-Medium",
  },
});
