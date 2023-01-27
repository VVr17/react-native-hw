import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";

export const Snap = ({ onClick, isLoading }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.snapButton}>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.accent} />
      ) : (
        <Icon name="camera" size={26} color={`${theme.colors.placeholder}`} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  snapButton: {
    opacity: 0.7,
    backgroundColor: `${theme.colors.mainBackground}`,
    width: 60,
    height: 60,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
