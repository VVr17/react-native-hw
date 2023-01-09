import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard/PostCard";
import { UserCard } from "../../components/UserCard";

export const DefaultPosts = ({ route: { params }, navigation }) => {
  // console.log("navigation Posts default", navigation);
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
          renderItem={({ item }) => (
            <PostCard
              screen="posts"
              post={item}
              onCommentsClick={() => {
                console.log("on comments");
                navigation.navigate("Comments");
              }}
              onMapClick={(item) => {
                console.log("on map click");
                navigation.navigate("Map", item);
              }}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </MainContainer>
  );
};
