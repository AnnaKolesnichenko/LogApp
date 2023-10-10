import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./store/store";
import Navigation from "./src/routes/MainRoot";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
