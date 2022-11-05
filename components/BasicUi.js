import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BasicUi = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goles, setGoles] = useState([]);
  const onChangeTextHandler = (inputGoal) => {
    setEnteredGoal(inputGoal);
  };
  const onClickButtonHandler = () => {
    setGoles((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal"
          onChangeText={onChangeTextHandler}
        ></TextInput>
        <Button
          onPress={onClickButtonHandler}
          title="add goals"
          color="#00cc66"
        ></Button>
      </View>
      <View style={styles.goalContainer}>
        {goles.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    borderColor: "#52527a",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#52527a",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
});

export default BasicUi;
