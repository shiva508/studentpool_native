import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import { useFonts } from "expo-font";
import Colors from "../constants/Colors";
import AppLoading from "expo-app-loading";

const GussNumber = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [gusseRounds, setGusseRounds] = useState(0);
  const [fontLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (inputNumber) => {
    setUserNumber(inputNumber);
    setGameOver(false);
  };
  const gameOverHandler = () => {
    setGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGusseRounds(0);
  };
  let screen = <StartGameScreen onValidInput={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={gusseRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
