import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.page}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
          First Name
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter first name"
            placeholderTextColor={"grey"}
            secureTextEntry={true}
            style={{ fontSize: 14, color: "black" }}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
          Email
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter first name"
            placeholderTextColor={"grey"}
            keyboardType="number-pad"
            secureTextEntry={true}
            style={{ fontSize: 14, color: "black" }}
          />
        </View>
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    height: 44,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderColor: "grey",
  },
});
