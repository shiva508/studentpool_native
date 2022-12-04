import {
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../constants/Colors";

const Card = ({ children }) => {
  const { width, height } = useWindowDimensions();
  return <View style={styles.inputContainer}>{children}</View>;
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputContainer: {
    //width: deviceHeight < 390 ? "50%" : "90%",
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
});
export default Card;
