import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { UserContext } from "./src/hooks/useUser";
import { useRoute } from "./src/router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
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
