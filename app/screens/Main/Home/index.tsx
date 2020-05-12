import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../../assets/Colors/Colors";
import GlobalStyles from "../../../../assets/Styles/Styles";
//import { styles } from "./styles";

export default ({ navigation }: any) => {
  return (
    <View style={GlobalStyles.screen}>
      <View style={GlobalStyles.containerScreen}>
        <Text style={GlobalStyles.titleText}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
