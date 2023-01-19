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
import { addComment } from "../../firebase/addComment";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { onSnapshot, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const dimensions = Dimensions.get("window");

export const CommentsScreen = ({ route: { params } }) => {
  const { login: userLogin } = useSelector(selectUser);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const { imageUrl, title, postId } = params;
  const [currentComment, setCurrentComment] = useState(null);
  const [allComments, setAllComments] = useState(null);

  const getComments = () => {
    const postRef = doc(db, "posts", postId); // find post
    const commentsListRef = collection(postRef, "comments"); // find comments collection

    onSnapshot(commentsListRef, (data) =>
      setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getComments();
  }, []);

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const onSubmit = async () => {
    if (!currentComment) return;

    await addComment({ postId, userLogin, comment: currentComment });

    hideKeyboard();
    setCurrentComment(null);
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

      {!isKeyboardShown && (
        <>
          {allComments?.length === 0 ? (
            <Text style={styles.text}>There are no comments</Text>
          ) : (
            <FlatList
              style={{ marginBottom: 32 }}
              data={allComments}
              renderItem={({ item, index }) => (
                <Comment data={item} index={index} />
              )}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
            />
          )}
        </>
      )}

      <CommentInput
        onInputFocus={onInputFocus}
        onInputChange={(comment) => setCurrentComment(comment)}
        value={currentComment}
        placeholder="Комментировать..."
        onSubmit={onSubmit}
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
