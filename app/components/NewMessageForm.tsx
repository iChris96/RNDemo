import React, { Component } from "react";
import { TextInput, View, Button } from "react-native";

interface MyState {
  inputText: string;
}

interface MyProps {
  onSend: any;
}

export default class NewMessageForm extends Component<MyProps, MyState> {
  state = { inputText: "" };

  handleChangeText = (text: string) => {
    this.setState({ inputText: text });
  };
  handleSend = () => {
    const { inputText } = this.state;
    const { onSend } = this.props;

    onSend(inputText);
    this.setState({ inputText: "" });
  };

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <TextInput
          testID="messageText"
          value={inputText}
          onChangeText={this.handleChangeText}
        />
        <Button title="Send" testID="sendButton" onPress={this.handleSend} />
      </View>
    );
  }
}
