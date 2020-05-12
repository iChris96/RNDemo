import React, { Component } from "react";
import { View, Text } from "react-native";
import NewMessageForm from "./app/components/NewMessageForm";
import MessageList from "./app/components/MessageList";

interface MyState {
  messages: Array<string>;
}

interface MyProps {}

export default class App extends Component<MyProps, MyState> {
  state = { messages: [] };
  handleSend = (newMessage: string) => {
    this.setState((state) => ({ messages: [newMessage, ...state.messages] }));
  };
  render() {
    const { messages } = this.state;
    return (
      <View>
        <NewMessageForm onSend={this.handleSend} />
        <MessageList data={messages} />
      </View>
    );
  }
}
/*import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/Auth/SignIn";
import RegisterScreen from "./app/screens/Auth/SignUp";
import HomeScreen from "./app/screens/Main/Home";

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
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
*/
