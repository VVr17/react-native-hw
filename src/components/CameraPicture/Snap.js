import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";

export const Snap = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.snapButton}>
      <MaterialCommunityIcons
        name="camera"
        size={26}
        color={`${theme.colors.placeholder}`}
      />
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
