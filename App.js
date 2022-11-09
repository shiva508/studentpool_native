import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BasicUi from "./components/BasicUi";
import FluxBoxUi from "./components/FluxBoxUi";
import GussNumber from "./components/GussNumber";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <GussNumber />
    </>
  );
  //<FluxBoxUi></FluxBoxUi>;
  //<BasicUi></BasicUi>
}
