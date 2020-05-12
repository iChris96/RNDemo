import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/Auth/SignIn";
import RegisterScreen from "./app/screens/Auth/SignUp";
import MainNavigation from "./app/screens/Main/MainNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    accent: "yellow",
  },
};

export default function App() {
  const Stack = createStackNavigator();
  const [isSignIn, setIsSignIn] = useState(false);

  const onLogin = () => setIsSignIn(true);
  const onSignOut = () => setIsSignIn(false);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {isSignIn ? (
            <>
              <Stack.Screen name="Home">
                {(props) => <MainNavigation {...props} onSignOut={onSignOut} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} onLogin={onLogin} />}
              </Stack.Screen>
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
