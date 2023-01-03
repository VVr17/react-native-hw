import { useState } from "react";
import { Image, Keyboard, View } from "react-native";
import { Surface } from "react-native-paper";
import { UploadImage } from "../../components/ImageUpload/ImageUpload";
import { MainContainer } from "../../components/MainContainer";
import { Button } from "../../components/UI-kit/Button";
import { PostInput } from "../../components/UI-kit/PostInput";

const initialState = {
  image: null,
  title: "",
  location: "",
};

export const CreatePostsScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [state, setState] = useState({ ...initialState });

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onTitleChange = (value) => {
    setState((prevState) => ({ ...prevState, title: value }));
  };

  const onLocationChange = (value) => {
    setState((prevState) => ({ ...prevState, location: value }));
  };

  const onInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const onSubmit = () => {
    hideKeyboard();
    setState(initialState);
    console.log("state", state);
  };

  const { location, image, title } = state;

  return (
    <MainContainer onClick={hideKeyboard}>
      <View>
        {!isKeyboardShown && <UploadImage image={image} />}
        <PostInput
          isKeyboardShown={isKeyboardShown}
          onInputChange={onTitleChange}
          value={title}
          onInputFocus={onInputFocus}
          placeholder="Название..."
        />
        <PostInput
          isKeyboardShown={isKeyboardShown}
          onInputChange={onLocationChange}
          value={location}
          onInputFocus={onInputFocus}
          placeholder="Местность..."
          hasIcon={true}
          isLast={true}
        />
        <Button onSubmit={onSubmit}>Опубликовать</Button>
      </View>
    </MainContainer>
  );
};
