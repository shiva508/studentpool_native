import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/Ui/Title";
import Colors from "../constants/Colors";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title titleStyle={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or Low</Text>
      </View>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
