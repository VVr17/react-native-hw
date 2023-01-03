import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../constants/theme";

export const HeaderIconButton = ({ name, styles }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles,
        paddingTop: name === "logout" ? 4 : 0,
        paddingRight: name === "logout" ? 16 : 0,
        paddingLeft: name === "logout" ? 0 : 16,
      }}
      activeOpacity={0.6}
      // onPress={onClick}
    >
      <MaterialCommunityIcons
        name={name}
        color={theme.colors.placeholder}
        size={26}
      />
    </TouchableOpacity>
  );
};
