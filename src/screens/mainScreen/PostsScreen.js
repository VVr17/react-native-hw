import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard/PostCard";
import { UserCard } from "../../components/UserCard";

export const PostsScreen = ({ route: { params } }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (params) setPosts((prevState) => [...prevState, params]);
  }, [params]);

  console.log("posts", posts);
  return (
    <MainContainer>
      <UserCard />
      {posts.length === 0 ? (
        <View />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard screen="posts" post={item} />}
          keyExtractor={(item, index) => index}
        />
      )}
    </MainContainer>
  );
};
