import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../constants/colors";

export default function PrimaryButton({style,onPress,children}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer,style]
            : [styles.buttonInnerContainer,style, styles.pressed]
        }
        android_ripple={{ color:colors.purple800}}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor:colors.purple500 ,
    borderRadius: 30,
    overflow: "hidden",

    elevation: 20,
  },
  buttonInnerContainer: {
    width: 100,
    height:50,
    paddingVertical: 13,
  },
  buttonText: {
    color:colors.white500,
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
