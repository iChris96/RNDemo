import React, { Fragment, useState } from "react";
import { TextInput } from "react-native-paper";

export default (props: any) => {
  return (
    <TextInput
      mode="outlined"
      label={props.label}
      style={props.style}
      dense={true}
      placeholderTextColor="red"
      selectTextOnFocus={true}
      selectionColor="white"
      secureTextEntry={props.isPassword}
      theme={{
        colors: {
          primary: "white",
          text: "white",
          placeholder: "white",
          background: props.backgroundColor,
        },
      }}
      underlineColor="transparent"
      value={props.value}
      onChangeText={(text) => props.setValue(text)}
    />
  );
};
