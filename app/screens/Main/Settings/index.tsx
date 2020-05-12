import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../../../../assets/Colors/Colors";
import GlobalStyles from "../../../../assets/Styles/Styles";
//import { styles } from "./styles";

export default ({ navigation, onSignOut }: any) => {
  return (
    <View style={GlobalStyles.screen}>
      <View style={GlobalStyles.containerScreen}>
        <Text style={GlobalStyles.titleText}>Settings</Text>
        <Button title="SignOut" onPress={() => onSignOut()}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
