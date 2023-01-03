import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { PostData } from "./PostData";
import { PostLocation } from "./PostLocation";

export const PostCard = ({ screen }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <Text style={styles.title}>Title</Text>
      <View style={styles.descriptionWrapper}>
        <PostData type="comments" screen={screen}>
          0
        </PostData>

        {screen === "profile" && (
          <PostData type="likes" screen={screen}>
            150
          </PostData>
        )}

        <PostLocation>Location</PostLocation>
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
