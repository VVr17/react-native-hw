import React, { useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Button } from "../components/UI-kit/Button";
import { Container } from "../components/Container";
import { ExtraButton } from "../components/ExtraButton";
import { Form } from "../components/Form";
import { Input } from "../components/UI-kit/Input";
import { Title } from "../components/Title";
import { theme } from "../constants/theme";
import { UserImage } from "../components/UserImage";

const initialState = {
  login: "",
  email: "",
  password: "",
};
export const RegistrationScreen = ({ dimensions: { width } }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [state, setState] = useState({ ...initialState });

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

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log("state", state);
    hideKeyboard();
    setState(initialState);
  };

  const { login, email, password } = state;

  return (
    <Container onClick={hideKeyboard}>
      <Form isKeyboardShown={isKeyboardShown} type="registration">
        <UserImage parentWidth={width} />
        <Title>Регистрация</Title>

        <Input
          isKeyboardShown={isKeyboardShown}
          onInputChange={onLoginChange}
          value={login}
          onInputFocus={onInputFocus}
          placeholder="Логин"
        />

        <Input
          isKeyboardShown={isKeyboardShown}
          onInputChange={onEmailChange}
          value={email}
          onInputFocus={onInputFocus}
          placeholder="Адрес электронной почты"
        />

        <Input
          isKeyboardShown={isKeyboardShown}
          onInputChange={onPasswordChange}
          value={password}
          onInputFocus={onInputFocus}
          isPassword={true}
          placeholder="Пароль"
          hasExtraButton={true}
          isLast={true}
        />

        {!isKeyboardShown && (
          <>
            <Button onSubmit={onSubmit}>Зарегистрироваться</Button>
            <ExtraButton> Уже есть аккаунт? Войти</ExtraButton>
          </>
        )}
      </Form>
    </Container>
  );
};
