import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <View style={styles.page}>
      <Text style={styles.liberty}>
        My name is Liberty, I'm a graduate from Computer Engineering.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  liberty: {
    fontSize: 30,
    color: "red",
  },
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
