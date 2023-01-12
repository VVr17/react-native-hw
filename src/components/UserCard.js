import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelector";
import { theme } from "../constants/theme";

export const UserCard = () => {
  const { login, email } = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/template.jpg")}
          style={styles.imageWrapper}
        />
      </View>
      <View>
        <Text style={styles.name}>{login}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },

  imageWrapper: {
    width: 60,
    height: 60,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 16,
    marginRight: 8,
  },

  name: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    colors: `${theme.colors.mainText}`,
  },
  email: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    colors: `${theme.colors.secondaryText}`,
  },
});
