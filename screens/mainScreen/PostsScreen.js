import { Image, Text } from "react-native";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard/PostCard";
import { UserCard } from "../../components/UserCard";

export const PostsScreen = () => {
  return (
    <MainContainer>
      <UserCard />
      <PostCard screen="posts" />
    </MainContainer>
  );
};
