import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Comment = ({ data, index }) => {
  const { comment, userLogin, userAvatar } = data;
  const isOdd = index % 2 === 0;

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: isOdd ? "row" : "row-reverse",
      }}
    >
      <View
        style={{
          ...styles.avatar,
          marginRight: isOdd ? 16 : 0,
          marginLeft: isOdd ? 0 : 16,
        }}
      >
        {userAvatar ? (
          <Image
            source={{ uri: userAvatar }}
            alt={userLogin}
            style={styles.avatarImage}
          />
        ) : (
          <Icon
            name="account-lock"
            color={theme.colors.placeholder}
            size={20}
          />
        )}
      </View>

      <View
        style={{
          ...styles.textWrapper,
          borderTopRightRadius: isOdd ? 6 : 0,
          borderTopLeftRadius: isOdd ? 0 : 6,
        }}
      >
        <Text style={styles.text}>{comment}</Text>
        <Text style={{ ...styles.login }}>{userLogin}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },

  avatar: {
    height: 28,
    width: 28,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarImage: {
    height: 28,
    width: 28,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textWrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: `${theme.colors.comment}`,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },

  text: {
    fontSize: 13,
    fontFamily: "Roboto-Regular",
  },

  login: {
    color: `${theme.colors.placeholder}`,
    fontSize: 10,
    textAlign: "right",
    //  textAlign: isOdd ? "right" : "left"
  },
});
