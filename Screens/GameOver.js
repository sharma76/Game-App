import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";

export default function GameOver ({setRounds,rounds,gameOver,setUserPickedNum,userPickedNum}) {
  function handleGame()
  {
    setUserPickedNum('');
    gameOver(false);
    setRounds(0);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Image/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        {" "}
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userPickedNum}</Text>.
      </Text>
      <View style={{ alignItems: "center" }}>
        <PrimaryButton onPress={handleGame} style={{width:200}}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    margin: 30,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 150,
    width: 300,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    marginBottom: 15,
    marginHorizontal: 10,
    fontSize: 23,
    textAlign: "center",
  },
  highlight: {
    color: "#dd5555",
    fontSize:30
  },
});
