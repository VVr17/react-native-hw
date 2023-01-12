import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconCross from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../constants/theme";

export const AddButton = ({ onClick, isActive }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.iconWrapper,
        borderColor: isActive ? theme.colors.accent : theme.colors.placeholder,
      }}
      activeOpacity={0.6}
      onPress={onClick}
    >
      {isActive ? (
        <Icon
          name="plus-thick"
          size={22}
          style={styles.icon}
          color={isActive ? theme.colors.accent : theme.colors.placeholder}
        />
      ) : (
        <IconCross
          name="times"
          size={18}
          style={styles.icon}
          color={isActive ? theme.colors.accent : theme.colors.placeholder}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -(26 / 2),
    bottom: 14,
    backgroundColor: `${theme.colors.mainBackground}`,
    borderRadius: 25,
    borderWidth: 1,
  },
});
