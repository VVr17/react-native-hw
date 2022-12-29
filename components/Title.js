import { StyleSheet, View, Text } from "react-native";

export const Title = ({ children }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    marginBottom: 32,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
});
