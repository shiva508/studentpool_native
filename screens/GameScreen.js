import { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/Ui/Card";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Title from "../components/Ui/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(0, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([userNumber]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  });
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && userNumber > currentGuess) ||
      (direction === "greater" && userNumber < currentGuess)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong..", [
        { text: "Sorry", style: "cancle" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRunNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRunNumber);
    setGuessRounds((prevoiuseGuess) => [newRunNumber, ...prevoiuseGuess]);
  };
  const guessItemLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title titleStyle={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text>High or Low</Text>
        <View style={styles.buttonsOuterContainer}>
          <View style={styles.buttonsInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonsInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessItemLength - itemData.index}
              guess={itemData.item}
            ></GuessLogItem>
          )}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  buttonsOuterContainer: {
    flexDirection: "row",
  },
  buttonsInnerContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "90%",
    with: 300,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
