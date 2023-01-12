import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "../../components/Container";
import { PostCard } from "../../components/PostCard/PostCard";
import { HeaderIconButton } from "../../components/UI-kit/HeaderIconButton";
import { theme } from "../../constants/theme";
import { selectUser } from "../../redux/auth/authSelector";
import { UserImage } from "../../components/UserImage";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(selectUser);

  return (
    <Container>
      <View style={styles.container}>
        <UserImage isActive={false} />
        <HeaderIconButton
          name="logout"
          onClick={() => dispatch(authSignOutUser())}
          styles={styles.icon}
        />
        <Text style={styles.name}>{login}</Text>
        {/* <PostCard screen="profile" /> */}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 140,
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: `${theme.colors.mainBackground}`,
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  icon: {
    position: "absolute",
    top: 16,
    right: 0,
  },
  name: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
  },
});
