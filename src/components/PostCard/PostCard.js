import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";
import { PostData } from "./PostData";
import { PostLocation } from "./PostLocation";

const dimensions = Dimensions.get("window");

export const PostCard = ({ screen, post, onCommentsClick, onMapClick }) => {
  const { pictureUri, title, locationName } = post;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pictureUri }}
          alt="post picture"
          resizeMode={"cover"}
          style={{ height: 240, width: dimensions.width }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionWrapper}>
        <PostData type="comments" screen={screen} onClick={onCommentsClick}>
          0
        </PostData>

        {screen === "profile" && (
          <PostData type="likes" screen={screen}>
            150
          </PostData>
        )}
        <PostLocation onClick={onMapClick}>{locationName}</PostLocation>
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
