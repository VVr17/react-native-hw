import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
} from "react-native";
import { theme } from "../constants/theme";

const initialState = {
  email: "",
  password: "",
};
export const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [state, setState] = useState({ ...initialState });

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onEmailChange = (value) => {
    setState((prevState) => ({ ...prevState, email: value }));
  };
  const onPasswordChange = (value) => {
    setState((prevState) => ({ ...prevState, password: value }));
  };

  const onInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const onSubmit = () => {
    hideKeyboard();
    setState(initialState);
  };

  const { login, email, password } = state;

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard} style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/bgImage.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isKeyboardShown ? 32 : 111,
              }}
            >
              <View style={styles.title}>
                <Text style={styles.titleText}>Войти</Text>
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  onChangeText={onEmailChange}
                  value={email}
                  onFocus={onInputFocus}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor={theme.colors.placeholder}
                />
              </View>

              <View
                style={{
                  ...styles.inputWrapper,
                  marginBottom: isKeyboardShown ? 32 : 43,
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={onPasswordChange}
                  value={password}
                  onFocus={onInputFocus}
                  secureTextEntry={true}
                  placeholder="Пароль"
                  placeholderTextColor={theme.colors.placeholder}
                />
                <TouchableOpacity
                  style={{ ...styles.extraButton, ...styles.inputButton }}
                  activeOpacity={0.6}
                  // onPress={onSubmit}
                >
                  <Text style={styles.extraButtonText}>Показать</Text>
                </TouchableOpacity>
              </View>

              {!isKeyboardShown && (
                <>
                  <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={onSubmit}
                  >
                    <Text style={styles.buttonTitle}>Войти</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.extraButton}
                    activeOpacity={0.6}
                    onPress={onSubmit}
                  >
                    <Text style={styles.extraButtonText}>
                      Нет аккаунта? Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${theme.colors.mainBackground}`,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  form: {
    backgroundColor: `${theme.colors.mainBackground}`,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  title: {
    alignItems: "center",
    marginBottom: 32,
  },
  titleText: {
    fontSize: 30,
    // fontWeight: 500,
  },

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
  },

  inputButton: {
    position: "absolute",
    top: 19,
    right: 16,
  },

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
  },

  extraButton: {
    backgroundColor: "transparent",
  },

  extraButtonText: {
    color: `${theme.colors.secondaryAccent}`,
    textAlign: "center",
    fontSize: 16,
  },
});
