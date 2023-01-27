import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { PostCard } from "../../components/PostCard/PostCard";
import { db } from "../../firebase/config";
import { MainContainer } from "../../components/MainContainer";
import { UserCard } from "../../components/UserCard";

export const DefaultPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    // receive posts from db
    onSnapshot(collection(db, "posts"), (data) =>
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <MainContainer>
      <Image
        source="//www.gravatar.com/avatar/390105a4ab80cde30259b6c6bd055be4?s=250&r=x&d=retro"
        // source={{ uri: avatarUrl }}
        // alt={login}
        alt="avatar"
        // resizeMode={"cover"}
        // style={styles.imageWrapper}
      />
      <UserCard />
      {posts.length === 0 ? (
        <View />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard screen="posts" post={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </MainContainer>
  );
};
