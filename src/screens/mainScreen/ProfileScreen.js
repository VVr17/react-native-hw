import { StyleSheet, Text, View } from "react-native";
import { Container } from "../../components/Container";
import { PostCard } from "../../components/PostCard/PostCard";
import { HeaderIconButton } from "../../components/UI-kit/HeaderIconButton";
import { UserImage } from "../../components/UserImage";
import { theme } from "../../constants/theme";

export const ProfileScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <UserImage isActive={false} />
        <HeaderIconButton name="logout" styles={styles.icon} />
        <Text style={styles.name}>Natali Romanova</Text>
        <PostCard screen="profile" />
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
