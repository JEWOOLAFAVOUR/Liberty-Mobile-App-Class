import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../project/Screen1";
import Screen2 from "../project/Screen2";


const _layout = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator options={{screenOption: false}}>
        Stack.Screen name="Screen1" component={Screen1} />
        Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default _layout;

const styles = StyleSheet.create({});
