import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";
import { Button } from "../../components/UI-kit/Button";
import { Container } from "../../components/Container";
import { ExtraButton } from "../../components/UI-kit/ExtraButton";
import { Form } from "../../components/Form";
import { Keyboard } from "react-native";
import { Input } from "../../components/UI-kit/Input";
import { Title } from "../../components/Title";

const initialState = {
  email: "",
  password: "",
};
export const LoginScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

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

    dispatch(authSignInUser(state));
  };

  const { email, password } = state;

  return (
    <Container onClick={hideKeyboard}>
      <Form isKeyboardShown={isKeyboardShown} type="login">
        <Title>Войти</Title>

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
            <Button onSubmit={onSubmit}>Войти</Button>
            <ExtraButton onClick={() => navigation.navigate("Register")}>
              Нет аккаунта? Зарегистрироваться
            </ExtraButton>
          </>
        )}
      </Form>
    </Container>
  );
};
