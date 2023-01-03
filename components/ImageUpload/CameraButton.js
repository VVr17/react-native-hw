import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";

export const CameraButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={imageUploaderStyles.uploadButton}
    >
      <MaterialCommunityIcons
        name="camera"
        size={26}
        color={`${theme.colors.placeholder}`}
      />
    </TouchableOpacity>
  );
};

const imageUploaderStyles = StyleSheet.create({
  uploadButton: {
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
