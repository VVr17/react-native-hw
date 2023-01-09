import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";

export const RemoveButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 40,
        backgroundColor: theme.colors.inputBackground,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
      activeOpacity={0.6}
      onPress={onClick}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        color={theme.colors.placeholder}
        size={26}
      />
    </TouchableOpacity>
  );
};