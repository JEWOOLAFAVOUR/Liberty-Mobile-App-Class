import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const _layout = () => {
  const name = [
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
    "Favour",
    "Liberty",
    "Timi",
    "Abdullahi",
    "Ayomide",
    "Damola",
  ];

  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 15 }}>
        This is the List Class
      </Text>

      <FlatList
        data={name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text>Hello</Text>
              <TouchableOpacity style={{}}>
                <Image
                  source={require("../../assets/icons/arrowright.png")}
                  style={{ height: 14, width: 14 }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingTop: 10,
  },
  container: {
    height: 40,
    width: 160,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
