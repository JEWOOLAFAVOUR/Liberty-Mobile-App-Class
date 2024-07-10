import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TabLayout() {
  return (
    <View style={styles.page}>
      <Text style={styles.liberty}>
        My name is Liberty, I'm a graduate from Computer Engineering.
      </Text>
      <View style={styles.wrapperBtn}>
        <Button title="Continue" />
      </View>
      <Button title="Start" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "green",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  liberty: {
    fontSize: 30,
    color: "red",
  },
  wrapperBtn: {
    marginBottom: 20,
    marginTop: 20,
  },
});
