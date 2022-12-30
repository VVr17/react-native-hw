import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../constants/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const IconButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={styles.iconWrapper}
      activeOpacity={0.6}
      onPress={onClick}
    >
      <Icon name="plus-circle-outline" size={26} color={theme.colors.accent} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    position: "absolute",
    right: -(26 / 2),
    bottom: 14,
  },
});
