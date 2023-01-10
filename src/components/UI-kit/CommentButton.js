import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome5";

export const CommentButton = ({ onClick }) => (
  <TouchableOpacity
    style={styles.iconWrapper}
    activeOpacity={0.6}
    onPress={onClick}
  >
    <Icon name="arrow-up" size={26} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconWrapper: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: `${theme.colors.accent}`,
    borderRadius: 25,
  },

  icon: {
    color: theme.colors.mainBackground,
  },
});