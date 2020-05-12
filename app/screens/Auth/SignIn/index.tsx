import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomImput from "../../../components/CustomImput";
import { Button } from "react-native-paper";
import Colors from "../../../../assets/Colors/Colors";
import GlobalStyles from "../../../../assets/Styles/Styles";
import { styles } from "./styles";

const lightColor = Colors.backGroundColors.lightColor;
const darkColor = Colors.backGroundColors.darkColor;

export default ({ navigation, onLogin }: any) => {
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
          <Text style={styles.headerText}>Weather App</Text>

          <View style={styles.inputsContainer}>
            <CustomImput
              style={styles.textInput}
              label="Email"
              testID="emailInput"
              value={email}
              setValue={setEmail}
              backgroundColor={lightColor}
            />

            <CustomImput
              style={styles.textInput}
              label={"Password"}
              testID="passwordInput"
              isPassword={true}
              underlineColor="transparent"
              value={password}
              setValue={setPassword}
              backgroundColor={lightColor}
            />

            <Button
              mode="contained"
              onPress={() => {
                onLogin();
              }}
              style={GlobalStyles.submitButton}
              labelStyle={GlobalStyles.submitButtonLabel}
              contentStyle={GlobalStyles.submitButtonContent}
            >
              SignIn!
            </Button>

            <Text
              testID="goToRegister"
              onPress={() => {
                navigation.navigate("Register");
              }}
              style={GlobalStyles.linkeable}
            >
              SignUp!
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
