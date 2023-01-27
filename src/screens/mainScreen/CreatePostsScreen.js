import { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard, View } from "react-native";
import * as Location from "expo-location";
import { Button } from "../../components/UI-kit/Button";
import { CameraPicture } from "../../components/CameraPicture/Camerapicture";
import { MainContainer } from "../../components/MainContainer";
import { PostInput } from "../../components/UI-kit/PostInput";
import { RemoveButton } from "../../components/UI-kit/RemoveButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { addPost } from "../../firebase/addPost";
import { theme } from "../../constants/theme";

export const CreatePostsScreen = ({ navigation }) => {
  const { userId } = useSelector(selectUser);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [pictureUri, setPictureUri] = useState(null);
  const [title, setTitle] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const geoLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = geoLocation.coords;
      setLocation({ latitude, longitude });
    };

    getLocation();
  }, []);

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const setInitialState = () => {
    setPictureUri(null);
    setTitle(null);
    setLocationName(null);
    setLocation(null);
  };

  const onSubmit = async () => {
    if (isLoading) return;

    const requiredDataMissing = !locationName || !pictureUri || !title;

    if (requiredDataMissing) return;

    const postData = {
      userId,
      pictureUri,
      locationName,
      title,
      location,
    };

    setIsLoading(true);

    await addPost(postData);

    setIsLoading(false);
    navigation.navigate("DefaultPosts");
    hideKeyboard();
    setInitialState();
  };

  const isDisabled = !locationName || !pictureUri || !title || isLoading;

  return (
    <MainContainer onClick={hideKeyboard}>
      <View>
        {!isKeyboardShown && (
          <CameraPicture
            pictureUri={pictureUri}
            setPictureUri={(pictureUri) => setPictureUri(pictureUri)}
          />
        )}
        <PostInput
          isKeyboardShown={isKeyboardShown}
          onInputChange={(title) => setTitle(title)}
          value={title}
          onInputFocus={onInputFocus}
          placeholder="Название..."
        />
        <PostInput
          isKeyboardShown={isKeyboardShown}
          onInputChange={(name) => setLocationName(name)}
          value={locationName}
          onInputFocus={onInputFocus}
          placeholder="Местность..."
          hasIcon={true}
          isLast={true}
        />
        <Button onSubmit={onSubmit} disabled={isDisabled}>
          {isLoading ? `Публикуем...` : "Опубликовать"}
        </Button>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.accent} />
      ) : (
        <RemoveButton onClick={() => setPictureUri(null)} />
      )}
    </MainContainer>
  );
};
