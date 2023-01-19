import { useEffect, useState } from "react";
import { onSnapshot, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PostData } from "./PostData";
import { PostLocation } from "./PostLocation";
import { theme } from "../../constants/theme";

const dimensions = Dimensions.get("window");

export const PostCard = ({ screen, post, comments }) => {
  const navigation = useNavigation();
  const [allComments, setAllComments] = useState([]);
  const { imageUrl, title, locationName, location, id } = post;

  const getComments = () => {
    const postRef = doc(db, "posts", id); // find post
    const commentsListRef = collection(postRef, "comments"); // find comments collection
    onSnapshot(commentsListRef, (data) =>
      setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          alt={title}
          resizeMode={"cover"}
          style={{ height: 240, width: dimensions.width }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionWrapper}>
        <PostData
          type="comments"
          screen={screen}
          onClick={() =>
            navigation.navigate("Comments", { imageUrl, title, postId: id })
          }
        >
          {allComments.length}
        </PostData>

        {/* <PostData type="likes" screen={screen}>0</PostData> */}

        <PostLocation
          onClick={() => navigation.navigate("Map", { title, location })}
        >
          {locationName}
        </PostLocation>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },

  imageContainer: {
    height: 240,
    width: "auto",
    backgroundColor: `${theme.colors.inputBackground}`,
    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: `${theme.colors.mainText}`,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },

  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
