import { useState } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/Ui/Card";
import InstructionText from "../components/Ui/InstructionText";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Title from "../components/Ui/Title";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

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
  const dynamicMarginTop = width < 390 ? 30 : 100;
  return (
    <ScrollView style={styles.screenStyle}>
      <KeyboardAvoidingView style={styles.screenStyle} behavior="position">
        <View style={[styles.rootContainer, { marginTop: dynamicMarginTop }]}>
          <Title titleStyle={styles.title}>Gusse My Number</Title>
          <Card>
            <InstructionText customstyle={styles.instructionText}>
              Enter a number
            </InstructionText>
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
                <PrimaryButton onPress={resetNumberHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonsInnerContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const deviceWidth = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceWidth < 390 ? 30 : 100,
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "90%",
    width: 300,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
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
  instructionText: {
    marginBottom: 12,
  },
});
export default StartGameScreen;
