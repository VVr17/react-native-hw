import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Main } from "./src/components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

// const dispatch = useDispatch();
// const user = useSelector(selectUser);

// const ref = createNavigationContainerRef();
// const [routeName, setRouteName] = useState();
// const [user, setUser] = useState(null);

// useEffect(() => {
// dispatch(authStateChangeUser());
// }, []);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log("signed in");
//     setUser(user);
//   } else {
//     console.log("signed out");
//   }
// });

// const changeRouteName = async () => {
//   const previousRouteName = routeName;
//   const currentRouteName = ref.getCurrentRoute().name;
//   setRouteName(currentRouteName);
// };

// const routing = useRoute({ routeName });

{
  /* <NavigationContainer
        ref={ref}
        onReady={() => {
          setRouteName(ref.getCurrentRoute().name);
        }}
        onStateChange={changeRouteName}
      >
        {routing}
      </NavigationContainer> */
}
