import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.page}>
      <Image
        source={require("../../assets/images/boy.jpg")}
        style={{ height: 200, width: 200, borderRadius: 200 }}
      />
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1720780994~exp=1720784594~hmac=657a8acb281fc16022db87852189d161ee79ead2aa0be4f3eafe7ff7d3682b45&w=360",
        }}
        style={{ height: 200, width: 200, marginTop: 20 }}
      />

      <TouchableOpacity style={styles.clickBtn}>
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  clickBtn: {
    height: 50,
    width: 150,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
