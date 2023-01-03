import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useState } from "react";
import { UserContext } from "./hooks/useUser";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const routing = useRoute(isLoggedIn);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
}
