import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (inputValue) => {
    setEnteredNumber(inputValue);
  };

  const resetNumberHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Entered number is invalid", [
        { text: "Okay", style: "destructive", onPress: resetNumberHandler },
      ]);
      return;
    }
    props.onValidInput(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsOuterContainer}>
        <View style={styles.buttonsInnerContainer}>
          <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonsInnerContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "block",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsOuterContainer: {
    flexDirection: "row",
  },
  buttonsInnerContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
