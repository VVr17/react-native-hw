import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/auth/authSelector";
import { useRoute } from "../router";

export const Main = () => {
  // const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const routing = useRoute({ routeName, user });

  const ref = createNavigationContainerRef();
  const [routeName, setRouteName] = useState();
  // const [user, setUser] = useState(null);
  console.log("user", user);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log("signed in");
  //     setUser(user);
  //   } else {
  //     console.log("signed out");
  //   }
  // });

  const changeRouteName = async () => {
    const previousRouteName = routeName;
    const currentRouteName = ref.getCurrentRoute().name;
    setRouteName(currentRouteName);
  };

  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute().name);
      }}
      onStateChange={changeRouteName}
    >
      {routing}
    </NavigationContainer>
  );
};
