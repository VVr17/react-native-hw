import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegistrationScreen } from "../screens/auth/RegistrationScreen";
import { PostsScreen } from "../screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "../screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "../screens/mainScreen/ProfileScreen";
import { theme } from "../constants/theme";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
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
        tabBarActiveTintColor: `${theme.colors.mainBackground}`,
        tabBarInactiveTintColor: `${theme.colors.mainText}`,
        tabBarActiveBackgroundColor: `${theme.colors.accent}`,
      }}
      // barStyle={{ backgroundColor: "transparent" }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-thick" color={color} size={26} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
