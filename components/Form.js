import { StyleSheet, View } from "react-native";
import { theme } from "../constants/theme";

export const Form = ({ children, type, isKeyboardShown }) => {
  return (
    <View
      style={
        type === "registration"
          ? {
              ...styles.form,
              ...styles.registrationForm,
              paddingBottom: isKeyboardShown ? 32 : 45,
            }
          : {
              ...styles.form,
              ...styles.loginForm,
              paddingBottom: isKeyboardShown ? 32 : 111,
            }
      }
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: `${theme.colors.mainBackground}`,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },

  registrationForm: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 92,
  },

  loginForm: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
});
