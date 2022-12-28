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
  login: "",
  email: "",
  password: "",
};
export const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [state, setState] = useState({ ...initialState });

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onLoginChange = (value) => {
    setState((prevState) => ({ ...prevState, login: value }));
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
                // marginBottom: isKeyboardShown ? 20 : 100,
              }}
            >
              <View style={styles.title}>
                <Text style={styles.titleText}>Регистрация</Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={onLoginChange}
                value={login}
                onFocus={onInputFocus}
                placeholder="Login"
                placeholderTextColor={theme.colors.placeholder}
              />

              <TextInput
                style={styles.input}
                onChangeText={onEmailChange}
                value={email}
                onFocus={onInputFocus}
                placeholder="Email"
                placeholderTextColor={theme.colors.placeholder}
              />

              <TextInput
                style={{ ...styles.input, marginBottom: 43 }}
                onChangeText={onPasswordChange}
                value={password}
                onFocus={onInputFocus}
                secureTextEntry={true}
                placeholder="password"
                placeholderTextColor={theme.colors.placeholder}
              />

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={onSubmit}
              >
                <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.link}
                activeOpacity={0.6}
                onPress={onSubmit}
              >
                <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
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
    paddingBottom: 45,
    paddingTop: 92,
  },

  title: {
    alignItems: "center",
    marginBottom: 32,
  },
  titleText: {
    fontSize: 30,
    // fontWeight: 500,
  },

  input: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderColor: `${theme.colors.border}`,
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

  link: {
    backgroundColor: "transparent",
  },

  linkText: {
    color: `${theme.colors.secondaryText}`,
    textAlign: "center",
    fontSize: 16,
  },
});
