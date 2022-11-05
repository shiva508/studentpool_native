import { StyleSheet, Text, View } from "react-native";

const FluxBoxUi = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          // width: 100,
          //height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "black",
          //width: 100,
          //height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          //width: 100,
          //height: 100,
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
export default FluxBoxUi;
