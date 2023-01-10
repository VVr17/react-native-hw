import { StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";

export const Comment = ({ comment, index }) => {
  const { desc } = comment;
  const isOdd = index % 2 === 0;

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: isOdd ? "row" : "row-reverse",
      }}
    >
      <View
        style={{
          ...styles.avatar,
          marginRight: isOdd ? 16 : 0,
          marginLeft: isOdd ? 0 : 16,
        }}
      ></View>

      <View
        style={{
          ...styles.textWrapper,
          borderTopRightRadius: isOdd ? 6 : 0,
          borderTopLeftRadius: isOdd ? 0 : 6,
        }}
      >
        <Text style={styles.text}>{desc}</Text>
        <Text style={{ ...styles.date, textAlign: isOdd ? "right" : "left" }}>
          date
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },

  avatar: {
    height: 28,
    width: 28,
    backgroundColor: `${theme.colors.inputBackground}`,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: `${theme.colors.border}`,
    justifyContent: "center",
    alignItems: "center",
  },

  textWrapper: {
    flex: 1,
    padding: 16,
    backgroundColor: `${theme.colors.comment}`,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },

  text: {
    fontSize: 13,
    fontFamily: "Roboto-Regular",
  },

  date: {
    color: `${theme.colors.placeholder}`,
    fontSize: 10,
  },
});
