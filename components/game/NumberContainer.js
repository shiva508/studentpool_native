import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
  },
});
