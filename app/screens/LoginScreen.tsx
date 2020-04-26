import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomImput from "../components/CustomImput";

const lightColor = "#9999ff";
const darkColor = "#6600ff";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LinearGradient colors={[lightColor, darkColor]} style={styles.gradient}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Text style={styles.text}>Weather App</Text>

          <View style={styles.inputsContainer}>
            <CustomImput
              style={styles.textInput}
              label="Email"
              value={email}
              setValue={setEmail}
              backgroundColor={lightColor}
            />

            <CustomImput
              style={styles.textInput}
              label={"Password"}
              isPassword={true}
              underlineColor="transparent"
              value={password}
              setValue={setPassword}
              backgroundColor={lightColor}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingTop: "40%",
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "red",
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  textInput: {
    marginVertical: 5,
  },
  scrollView: {
    //backgroundColor: "blue",
  },
  text: {
    fontSize: 46,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
