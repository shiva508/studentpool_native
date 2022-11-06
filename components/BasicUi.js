import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const BasicUi = () => {
  const [goles, setGoles] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const onClickButtonHandler = (enteredGoal) => {
    setGoles((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setIsInputVisible(false);
  };
  const deleteGoal = (id) => {
    setGoles((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalModel = () => {
    setIsInputVisible(true);
  };

  const closeModalHandler = () => {
    setIsInputVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button
        title="add goal"
        color="#5e0acc"
        onPress={startAddGoalModel}
      ></Button>

      <GoalInput
        inputVisible={isInputVisible}
        onAddGoal={onClickButtonHandler}
        onClose={closeModalHandler}
      ></GoalInput>

      <View style={styles.goalContainer}>
        <FlatList
          data={goles}
          renderItem={(itemData) => {
            return (
              <GoalItem
                item={itemData.item}
                onDeleteGoal={deleteGoal}
              ></GoalItem>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
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

  goalContainer: {
    flex: 5,
  },
});

export default BasicUi;
