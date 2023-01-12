import { useDispatch } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";
import { authSignOutUser } from "../../redux/auth/authOperations";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { DefaultPosts } from "../nestedScreens/DefaultPosts";
import { HeaderIconButton } from "../../components/UI-kit/HeaderIconButton";
import { MapScreen } from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <NestedScreen.Navigator initialRouteName="Posts">
      <NestedScreen.Screen
        name="DefaultPosts"
        component={DefaultPosts}
        options={{
          headerTitleAlign: "center",
          headerStyle: { ...styles.header },
          headerTitle: () => <Text style={styles.title}>Публикации</Text>,
          headerRight: () => (
            <HeaderIconButton
              name="logout"
              onClick={() => dispatch(authSignOutUser())}
            />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { ...styles.header },
          headerTitle: () => <Text style={styles.title}>Комментарии</Text>,
          headerLeft: () => (
            <HeaderIconButton
              name="keyboard-backspace"
              onClick={() => navigation.goBack()}
            />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { ...styles.header },
          headerTitle: () => <Text style={styles.title}>Карта</Text>,
          headerLeft: () => (
            <HeaderIconButton
              name="keyboard-backspace"
              onClick={() => navigation.goBack()}
            />
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto-Medium",
  },
});
