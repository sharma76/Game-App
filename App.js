/*-------------------------------------------------------------------IMPORTS--------------------------------------------------------------------*/ 
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import MainScreen from "./Screens/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import GameOver from "./Screens/GameOver";
import color from "./constants/colors";
import {useFonts} from 'expo-font';
// import AppLoading from "expo-app-loading";
/*--------------------------------------------------APP LOGIC-----------------------------------------------*/ 
export default function App() {
  const [userPickedNum, setUserPickedNum] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds,setRounds]=useState(1);
  const [fontLoaded]=useFonts({
    'openSans': require('./assets/Font/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/Font/OpenSans-Bold.ttf'),
  });
  // if(!fontLoaded)
  // return <AppLoading/>
  let screen = <MainScreen setUserPickedNum={setUserPickedNum} />;
  if (userPickedNum)
    screen = (
      <GameScreen userPickedNum={userPickedNum} gameOver={setIsGameOver} rounds={rounds} setRounds={setRounds}/>
    );
  if (isGameOver) screen = <GameOver setRounds={setRounds} rounds={rounds} userPickedNum={userPickedNum} gameOver={setIsGameOver} setUserPickedNum={setUserPickedNum} />;

  /*--------------------------------------------------RENDERING-----------------------------------------------*/ 
  return (
    <LinearGradient
      colors={[color.purple400, color.yellow500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/Image/dice.png")}
        style={styles.rootContainer}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        {screen}
      </ImageBackground>

      <StatusBar style="auto" />
    </LinearGradient>
  );
   /*--------------------------------------------------COMPONENT END-----------------------------------------------*/
}
/*------------------------------------------------- STYLING---------------------------------------------------------*/
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
