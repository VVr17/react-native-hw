import { useEffect, useState } from "react";
import { Keyboard, View } from "react-native";
import * as Location from "expo-location";
import { Button } from "../../components/UI-kit/Button";
import { CameraPicture } from "../../components/CameraPicture/Camerapicture";
import { MainContainer } from "../../components/MainContainer";
import { PostInput } from "../../components/UI-kit/PostInput";
import { RemoveButton } from "../../components/UI-kit/RemoveButton";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { uploadPost } from "../../firebase/uploadPost";

export const CreatePostsScreen = ({ navigation }) => {
  const { userId } = useSelector(selectUser);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [pictureUri, setPictureUri] = useState(null);
  const [title, setTitle] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

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
    const requiredDataMissing = !locationName || !pictureUri || !title;

    if (requiredDataMissing) return;

    const postData = {
      userId,
      pictureUri,
      locationName,
      title,
      location,
    };

    await uploadPost(postData);

    navigation.navigate("DefaultPosts");
    hideKeyboard();
    setInitialState();
  };

  const isDisabled = !locationName || !pictureUri || !title;

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
          Опубликовать
        </Button>
      </View>
      <RemoveButton onClick={() => setPictureUri(null)} />
    </MainContainer>
  );
};
