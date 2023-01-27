import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../constants/theme";

export const CommentButton = ({ onClick, isLoading }) => (
  <TouchableOpacity
    style={styles.iconWrapper}
    activeOpacity={0.6}
    onPress={onClick}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color={theme.colors.mainBackground} />
    ) : (
      <Icon name="arrow-up" size={26} style={styles.icon} />
    )}
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
