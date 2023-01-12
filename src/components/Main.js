import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { selectUser } from "../redux/auth/authSelector";
import { useRoute } from "../router";

export const Main = () => {
  const ref = createNavigationContainerRef();
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector(selectUser);
  const [routeName, setRouteName] = useState();
  const routing = useRoute({ routeName, isSignedIn });

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [dispatch]);

  const changeRouteName = async () => {
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

//! to set loading while auth
/**
 *  state = {
    loading: firebase.auth().currentUser === null,
    user: firebase.auth().currentUser,
  };

  componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged(
        user => user && this.setState({ user, loading: false })
      );
  }

  render() {
    const { loading, user } = this.state;

    return this.props.children({ loading, user });
  }
}
 */
