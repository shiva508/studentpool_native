import { StyleSheet, Text } from "react-native";

const Title = (props) => {
  return (
    <Text style={[props.titleStyle, styles.defaultStyle]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "open-sans-bold",
  },
});
export default Title;
