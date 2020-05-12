import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  containerScreen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  linkeable: {
    marginTop: 8,
    color: "white",
    textAlign: "right",
  },
  submitButton: {
    marginTop: 16,
    backgroundColor: Colors.buttons.space,
  },
  submitButtonLabel: {
    color: "white",
  },
  submitButtonContent: {
    height: 46,
  },
  titleText: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
