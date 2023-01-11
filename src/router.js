import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen";
import { PostsScreen } from "./screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "./screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./screens/mainScreen/ProfileScreen";
import { theme } from "./constants/theme";
import { StyleSheet, Text, View } from "react-native";
import { HeaderIconButton } from "./components/UI-kit/HeaderIconButton";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = ({ isLoggedIn, routeName }) => {
  const hideTab = routeName === "Comments" || routeName === "Map";

  if (!isLoggedIn) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: `${theme.colors.mainText}`,
        headerStyle: styles.header,
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: hideTab ? "none" : "flex" },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.iconWrapper,
                backgroundColor: focused
                  ? `${theme.colors.accent}`
                  : "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="view-grid-outline"
                color={
                  focused
                    ? `${theme.colors.mainBackground}`
                    : `${theme.colors.mainText}`
                }
                size={26}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={styles.title}>Создать публикацию</Text>
          ),
          headerLeft: () => (
            <HeaderIconButton
              name="keyboard-backspace"
              onClick={() => navigation.goBack()}
            />
          ),
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.iconWrapper,
                backgroundColor: focused
                  ? `${theme.colors.accent}`
                  : "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="plus-thick"
                color={
                  focused
                    ? `${theme.colors.mainBackground}`
                    : `${theme.colors.mainText}`
                }
                size={26}
              />
            </View>
          ),
        })}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...styles.iconWrapper,
                backgroundColor: focused
                  ? `${theme.colors.accent}`
                  : "transparent",
              }}
            >
              <MaterialCommunityIcons
                name="account-outline"
                color={
                  focused
                    ? `${theme.colors.mainBackground}`
                    : `${theme.colors.mainText}`
                }
                size={26}
              />
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
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

  iconWrapper: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
