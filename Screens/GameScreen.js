import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import color from "../constants/colors";
import Title from "../Components/Title";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
export default function GameScreen({
  userPickedNum,
  gameOver,
  rounds,
  setRounds,
}) {
  const min = useRef(1);
  const max = useRef(100);
  const id = useRef(0);
  const initialGuess = generateRandNum(min.current, max.current);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessLog, setGuessLog] = useState([
    { id: id.current, log: initialGuess },
  ]);
  function handleGuessLog() {
    id.current = id.current + 1;
    setGuessLog([{ id: id.current, log: currentGuess }, ...guessLog]);
  }
  useEffect(() => {
    if (currentGuess === userPickedNum) gameOver(true);
  }, [currentGuess, userPickedNum, gameOver]);
  function generateRandNum(minVal, maxVal) {
    const randNum = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    return randNum;
  }
  function guessHandler(direction) {
    if (
      (currentGuess < userPickedNum && direction === "lower") ||
      (currentGuess > userPickedNum && direction === "upper")
    ) {
      Alert.alert("hey!", "Don't lie", [{ text: "Guess Again" }]);
      return;
    }
    if (direction === "lower") max.current = currentGuess;
    else min.current = currentGuess;
    setCurrentGuess(generateRandNum(min.current, max.current));
    setRounds(rounds + 1);
    handleGuessLog();
  }

  return (
    <View style={{flex:1}}>
      <Title>Opponent's Guess</Title>

      <View style={styles.guessContainer}>
        <Text style={styles.guessText}>{currentGuess}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={{ marginRight: 5 }}>
          <PrimaryButton
            style={{ width: 120, height: 60 }}
            onPress={() => guessHandler("lower")}
          >
            <Ionicons name="md-remove" size={30} />
          </PrimaryButton>
        </View>
        <View style={{ marginLeft: 5 }}>
          <PrimaryButton
            style={{ width: 120, height: 60 }}
            onPress={() => guessHandler("upper")}
          >
            <Ionicons name="md-add" size={30} />
          </PrimaryButton>
        </View>
      </View>
      <View style={{flex:1}}>
        <FlatList
          data={guessLog}
          keyExtractor={(log) => log.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.logContainer}>
                <Text style={styles.logText}>#{index}</Text>
                <Text style={styles.logText}>Opponent's Guess: {item.log}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  guessContainer: {
    marginTop: 30,
    marginHorizontal: 50,
    borderWidth: 3,
    padding: 30,
    borderColor: color.yellow500,
    borderRadius: 10,
  },
  guessText: {
    fontSize: 35,
    color: color.yellow500,
    textAlign: "center",
  },
  logContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.yellow500,

    borderColor: colors.white500,
    borderWidth: 2,
    borderRadius: 30,

    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logText: {
    fontSize: 18,
  },
});
