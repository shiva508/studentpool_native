import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BasicUi from "./components/BasicUi";
import FluxBoxUi from "./components/FluxBoxUi";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <BasicUi></BasicUi>
    </>
  ); //<FluxBoxUi></FluxBoxUi>;
}
