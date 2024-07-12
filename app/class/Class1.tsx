import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TabLayout() {
  return (
    <View style={styles.page}>
      <View
        style={{
          backgroundColor: "red",
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 10,
        }}
      >
        <Text>A for Apple</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 10,
        }}
      >
        <Text>B for Babble</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
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
