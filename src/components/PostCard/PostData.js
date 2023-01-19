import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../constants/theme";

export const PostData = ({ children, type, screen, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.6}
      onPress={onClick}
    >
      {type === "comments" && (
        <Icon
          style={{
            ...styles.icon,
            color:
              screen === "posts"
                ? `${theme.colors.placeholder}`
                : `${theme.colors.accent}`,
          }}
          name="comment-o"
          size={26}
          color={`${theme.colors.placeholder}`}
        />
      )}
      {type === "likes" && (
        <IconFa
          style={{
            ...styles.icon,
            color:
              screen === "posts"
                ? `${theme.colors.placeholder}`
                : `${theme.colors.accent}`,
          }}
          name="thumbs-up"
          size={26}
          color={`${theme.colors.placeholder}`}
        />
      )}
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginRight: 24,
  },

  icon: {
    marginRight: 8,
  },

  text: {
    color: `${theme.colors.placeholder}`,
    fontSize: 16,
  },
});
