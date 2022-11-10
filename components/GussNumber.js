import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "../screens/GameScreen";

const GussNumber = () => {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (inputNumber) => {
    console.log("Num IP:" + inputNumber);
    setUserNumber(inputNumber);
    console.log("Num IP2:" + userNumber);
  };
  let screen = <StartGameScreen onValidInput={pickedNumberHandler} />;
  if (userNumber) {
    console.log("Check");
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
export default GussNumber;
