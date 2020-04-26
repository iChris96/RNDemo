import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
// You can import from local files
import LoginScreen from "./app/screens/LoginScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
