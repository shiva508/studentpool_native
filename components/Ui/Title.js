import { Text } from "react-native";

const Title = (props) => {
  return <Text style={props.titleStyle}>{props.children}</Text>;
};
export default Title;
