import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../constants/theme";

export const PostInput = ({
  onInputChange,
  value,
  onInputFocus,
  placeholder,
  hasIcon = false,
  isLast = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    onInputFocus();
    setIsFocused(true);
  };

  return (
    <View
      style={{
        ...styles.inputWrapper,
        marginBottom: isLast ? 32 : 16,
      }}
    >
      <TextInput
        style={{
          ...styles.input,
          borderBottomColor: isFocused
            ? `${theme.colors.accent}`
            : `${theme.colors.border}`,
          paddingLeft: hasIcon ? 28 : 0,
        }}
        onChangeText={onInputChange}
        value={value}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
      />

      {hasIcon && (
        <Icon
          style={styles.inputIcon}
          name="map-marker-alt"
          size={26}
          color={`${theme.colors.placeholder}`}
        />
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
    borderBottomWidth: 1,
    padding: 16,
    fontSize: 16,
    backgroundColor: `transparent`,
    fontFamily: "Roboto-Regular",
  },

  inputIcon: {
    position: "absolute",
    top: 16,
    left: 0,
  },
});
