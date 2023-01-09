import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants/theme";
import IconFa from "react-native-vector-icons/FontAwesome5";

export const PostLocation = ({ children, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.location}
      activeOpacity={0.6}
      onPress={onClick}
    >
      <IconFa
        style={styles.icon}
        name="map-marker-alt"
        size={26}
        color={`${theme.colors.placeholder}`}
      />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },

  icon: {
    marginRight: 8,
  },

  text: {
    maxWidth: 220,
    fontSize: 15,
    color: `${theme.colors.mainText}`,
    textDecorationLine: "underline",
  },
});
