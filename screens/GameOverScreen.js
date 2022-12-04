import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Title from "../components/Ui/Title";
import Colors from "../constants/Colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title titleStyle={styles.title}>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summeryText}>
        Kousar took <Text style={styles.heighlight}>{roundsNumber}</Text> rounds
        to gusse
        <Text style={styles.heighlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};
const diviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize: 23,
    textAlign: "center",
    marginVertical: 24,
  },
  heighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  title: {
    fontSize: 24,
    fontWeight: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
  imageContainer: {
    width: diviceWidth < 380 ? 100 : 300,
    height: diviceWidth < 380 ? 100 : 300,
    borderRadius: diviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
});
export default GameOverScreen;
