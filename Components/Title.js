import { View, Text, StyleSheet } from "react-native";
import color from "../constants/colors";
export default function Title({ children }) {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    marginHorizontal: 20,
    borderWidth: 3,
    padding: 15,
    borderColor: color.white500,
  },
  titleText: {
    fontSize: 20,
    color: color.white500,
    textAlign: "center",
    fontFamily:"openSansBold"
  },
});
