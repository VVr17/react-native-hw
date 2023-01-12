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

const dimensions = Dimensions.get("window");
const comments = [
  {
    desc: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    desc: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  },
  {
    desc: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  },
  { desc: "Thank you! That was very helpful!" },
];

export const CommentsScreen = ({ route: { params } }) => {
  const [{ pictureUri, title }, setSetPictureUri] = useState([]);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (params) setSetPictureUri(params);
  }, [params]);

  const onSubmit = () => {
    console.log("submit");
    console.log("comment", comment);
  };

  return (
    <MainContainer>
      <View style={styles.imageContainer}>
        {pictureUri && (
          <Image
            source={{ uri: pictureUri }}
            alt={title}
            resizeMode={"cover"}
            style={{ height: 240, width: dimensions.width }}
          />
        )}
      </View>

      {comments.length === 0 ? (
        <Text>There are no comments</Text>
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
        onInputChange={(comment) => setComment(comment)}
        value={comment}
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
});
