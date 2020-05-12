import React, { Fragment, useState } from "react";
import { TextInput } from "react-native-paper";

const color = "00dfa9";
export default (props: any) => {
  return (
    <TextInput
      mode="flat"
      label={props.label}
      style={props.style}
      dense={true}
      testID={props.testID}
      secureTextEntry={props.isPassword}
      theme={{
        colors: {
          primary: "black",
          text: "black",
          placeholder: "black",
          background: "white",
        },
      }}
      underlineColor="transparent"
      underlineColorAndroid="blue"
      value={props.value}
      onChangeText={(text) => props.setValue(text)}
    />
  );
};
