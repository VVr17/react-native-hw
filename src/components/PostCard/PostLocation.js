import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/theme";
import IconFa from "react-native-vector-icons/FontAwesome5";

export const PostLocation = ({ children }) => {
  return (
    <View style={styles.location}>
      <IconFa
        style={styles.icon}
        name="map-marker-alt"
        size={26}
        color={`${theme.colors.placeholder}`}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
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
