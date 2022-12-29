import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { theme } from "../constants/theme";

export const Container = ({ children, onClick }) => {
  return (
    <TouchableWithoutFeedback onPress={onClick} style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/bgImage.png")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            {children}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${theme.colors.mainBackground}`,
    fontFamily: "Roboto-Regular",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
