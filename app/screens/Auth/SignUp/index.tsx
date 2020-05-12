import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomImput from "../../../components/CustomImput";
import Colors from "../../../../assets/Colors/Colors";
import { styles, buttons } from "./styles";
import GlobalStyles from "../../../../assets/Styles/Styles";
import { Button } from "react-native-paper";

const lightColor = Colors.backGroundColors.lightColor;
const darkColor = Colors.backGroundColors.darkColor;

export default ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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
              testID="signUp_email_input"
              value={email}
              setValue={setEmail}
              backgroundColor={lightColor}
            />

            <CustomImput
              style={styles.textInput}
              label={"Password"}
              testID="signUp_password_input"
              isPassword={true}
              underlineColor="transparent"
              value={password}
              setValue={setPassword}
              backgroundColor={lightColor}
            />

            <CustomImput
              style={styles.textInput}
              label={"Repeat Password"}
              isPassword={true}
              testID="signUp_repeat_password_input"
              underlineColor="transparent"
              value={repeatPassword}
              setValue={setRepeatPassword}
              backgroundColor={lightColor}
            />

            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={GlobalStyles.submitButton}
              labelStyle={GlobalStyles.submitButtonLabel}
              contentStyle={GlobalStyles.submitButtonContent}
            >
              SignUp!
            </Button>

            <Text
              style={GlobalStyles.linkeable}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Already have an account? Login Here!
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
