/*--------------------------------------------------IMPORTS-----------------------------------------------*/

import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import color from "../constants/colors";

/*--------------------------------------------------APP LOGIC-----------------------------------------------*/

export default function MainScreen({ setUserPickedNum }) {
  const [inputText, setInputText] = useState("");
  function handleReset() {
    setInputText("");
  }
  function handleConfirm() {
    let inputNumber = parseInt(inputText);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid", "Enter number between 1 and 100", [
        { text: "ok", onPress: handleReset },
      ]);
      return;
    }
    setUserPickedNum(inputNumber);
  }

  /*--------------------------------------------------RENDERING-----------------------------------------------*/

  return (
    <View style={styles.Container}>
      <TextInput
        style={[styles.inputContainer, styles.input]}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={(input) => setInputText(input)}
        value={inputText}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.button}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );

/*--------------------------------------------------COMPONENT END-----------------------------------------------*/
}

/*------------------------------------------------- STYLING---------------------------------------------------------*/

const styles = StyleSheet.create({
  Container: {
    alignSelf: "center",
    margin: 150,
    width: 300,
    height: 220,
    backgroundColor: color.purple300,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignSelf: "center",
    borderBottomWidth: 2,
    padding: 5,
    borderColor: color.yellow500,
    marginBottom: 5,
  },
  input: {
    color: color.yellow500,
    fontSize: 20,
  },
  button: {
    margin: 20,
  },
});
