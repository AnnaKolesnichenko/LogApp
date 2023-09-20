import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";

import MainRootNavigation from "./src/routes/MainRoot";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MainRootNavigation />
    </>
  );
}

//
