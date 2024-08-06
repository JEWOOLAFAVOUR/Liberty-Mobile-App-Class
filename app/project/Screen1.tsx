import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
