import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children, customstyle }) => {
  return <Text style={[styles.instructionText, customstyle]}>{children}</Text>;
};
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
