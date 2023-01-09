import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";
import { HeaderIconButton } from "../../components/UI-kit/HeaderIconButton";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { DefaultPosts } from "../nestedScreens/DefaultPosts";
import { MapScreen } from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator initialRouteName="Posts">
      <NestedScreen.Screen
        // options={{ headerShown: false }}
        name="DefaultPosts"
        component={DefaultPosts}
        options={{
          headerTitleAlign: "center",
          headerRight: () => <HeaderIconButton name="logout" />,
          headerTitle: () => <Text style={styles.title}>Публикации</Text>,
        }}
      />
      <NestedScreen.Screen
        // options={{ headerShown: false }}
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
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
        // options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
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
