import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Comment } from "../../components/Comment";
import { CommentInput } from "../../components/UI-kit/CommentInput";
import { MainContainer } from "../../components/MainContainer";
import { theme } from "../../constants/theme";
import { uploadComment } from "../../firebase/uploadComment";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";

const dimensions = Dimensions.get("window");
// const comments = [
//   {
//     desc: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
//   },
//   {
//     desc: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
//   },
//   {
//     desc: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
//   },
//   { desc: "Thank you! That was very helpful!" },
// ];

export const CommentsScreen = ({ route: { params } }) => {
  const { userId } = useSelector(selectUser);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const { imageUrl, title, postId } = params;
  const [comment, setComment] = useState(null);
  const comments = [];

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const addComment = async () => {
    // console.log("submit");
    // console.log("comment", comment);

    await uploadComment({ postId, userId, comment });

    hideKeyboard();
    setComment(null);
  };

  return (
    <MainContainer onClick={hideKeyboard}>
      {!isKeyboardShown && (
        <View style={styles.imageContainer}>
          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              alt={title}
              resizeMode={"cover"}
              style={{ height: 240, width: dimensions.width }}
            />
          )}
        </View>
      )}

      {comments.length === 0 ? (
        <Text style={styles.text}>There are no comments</Text>
      ) : (
        <FlatList
          style={{ marginBottom: 32 }}
          data={comments}
          renderItem={({ item, index }) => (
            <Comment comment={item} index={index} />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        />
      )}

      <CommentInput
        onInputFocus={onInputFocus}
        onInputChange={(comment) => setComment(comment)}
        value={comment}
        placeholder="Комментировать..."
        onSubmit={addComment}
      />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 240,
    width: "auto",
    backgroundColor: `${theme.colors.inputBackground}`,
    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    marginBottom: 32,
    color: `${theme.colors.placeholder}`,
  },
});
