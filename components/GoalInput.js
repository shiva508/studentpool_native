import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const onChangeTextHandler = (inputGoal) => {
    setEnteredGoal(inputGoal);
  };
  const onClickButtonHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.inputVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageview}
          source={require("../assets/images/shiva.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal"
          onChangeText={onChangeTextHandler}
          value={enteredGoal}
        />
        <View style={styles.addCloseConatiner}>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onClose} />
          </View>
          <View style={styles.button}>
            <Button
              onPress={onClickButtonHandler}
              title="add goals"
              color="#00cc66"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#ebfbee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    borderRadius: 6,
  },
  addCloseConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius: 6,
  },
  imageview: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
export default GoalInput;
