import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Container } from "../../components/Container";
import { PostCard } from "../../components/PostCard/PostCard";
import { HeaderIconButton } from "../../components/UI-kit/HeaderIconButton";
import { theme } from "../../constants/theme";
import { selectUser } from "../../redux/auth/authSelector";
import { UserImage } from "../../components/UserImage";
import { db } from "../../firebase/config";
import { authSignOutUser } from "../../redux/auth/authOperations";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { login, userId } = useSelector(selectUser);
  const [posts, setPosts] = useState([]);

  const getUserPosts = async () => {
    const userQuery = query(
      collection(db, "posts"),
      where("userId", "==", `${userId}`)
    );

    onSnapshot(userQuery, (data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

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

        {posts.length === 0 ? (
          <View />
        ) : (
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostCard screen="profile" post={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 140,
    paddingTop: 82,
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
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
  },
});
