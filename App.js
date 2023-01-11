import { useFonts } from "expo-font";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { useState } from "react";
import { useRoute } from "./src/router";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  const ref = createNavigationContainerRef();
  const [routeName, setRouteName] = useState();
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("signed in");
      setUser(user);
    } else {
      console.log("signed out");
    }
  });

  const changeRouteName = async () => {
    const previousRouteName = routeName;
    const currentRouteName = ref.getCurrentRoute().name;
    setRouteName(currentRouteName);
  };

  const routing = useRoute({ routeName });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={ref}
        onReady={() => {
          setRouteName(ref.getCurrentRoute().name);
        }}
        onStateChange={changeRouteName}
      >
        {routing}
      </NavigationContainer>
    </Provider>
  );
}

// import { useFonts } from "expo-font";
// import {
//   NavigationContainer,
//   createNavigationContainerRef,
// } from "@react-navigation/native";
// import { useState } from "react";
// import { UserContext } from "./src/hooks/useUser";
// import { useRoute } from "./src/router";
// import { Provider } from "react-redux";

// const ref = createNavigationContainerRef();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [routeName, setRouteName] = useState();

//   const logIn = () => {
//     setIsLoggedIn(true);
//   };

//   const logOut = () => {
//     setIsLoggedIn(false);
//   };

//   const changeRouteName = async () => {
//     const previousRouteName = routeName;
//     const currentRouteName = ref.getCurrentRoute().name;
//     setRouteName(currentRouteName);
//   };

//   const routing = useRoute({ isLoggedIn, routeName });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <UserContext.Provider value={{ isLoggedIn, logIn, logOut }}>
//       <NavigationContainer
//         ref={ref}
//         onReady={() => {
//           setRouteName(ref.getCurrentRoute().name);
//         }}
//         onStateChange={changeRouteName}
//       >
//         {routing}
//       </NavigationContainer>
//     </UserContext.Provider>
//   );
// }
