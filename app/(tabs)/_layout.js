import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={"green"} barStyle={'light-content'} />
      <View style={{ flex: 1 }}>
        <View style={styles.big}>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Zoom</Text>
        </View>
      </View>
      <View style={styles.big2}>
        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>2go</Text>
      </View>
      <View style={{ height: 100, borderWidth: 1, paddingHorizontal: 20, justifyContent: 'center', }}>
        <TextInput
          placeholder='enter your name'
          keyboardType='email-address'
          secureTextEntry={false}
        />
      </View>
    </View>
  );
};

export default _layout

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 10,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
  },
  big: {
    height: 200,
    width: 200,
    marginBottom: 10,
    borderRadius: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // flex: 1
  },
  big2: {
    height: 200,
    width: 200,
    marginBottom: 10,
    // borderRadius: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});





















// import { StyleSheet, Text, View, FlatList } from 'react-native';
// import React from 'react';

// const _layout = () => {

//   const data = [
//     {
//       id: 1,
//       title: 'Ade',
//       details: "Nice wears for guys",
//       // bg: 'green',
//     }, {
//       id: 2,
//       title: 'Thomas',
//       details: "Nice wears for guys",
//       // bg: "red"
//     }, {
//       id: 3,
//       title: 'John',
//       details: "Nice wears for guys",
//       // bg: "indigo"
//     },
//   ]

//   const userData = { name: "favour", class: "12" }

//   return (
//     <View style={styles.page}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Comparison</Text>

//       <View style={{ marginTop: 30 }}>
//         <FlatList
//           data={data}
//           renderItem={({ item }) => {
//             return (
//               <View>
//                 {item.id !== 2 &&
//                   <View style={[styles.container, { backgroundColor: item.id === 5 ? "green" : "black" }]}>
//                     <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>{item.title}</Text>
//                     <Text style={{ fontSize: 15, color: "white" }}>{item.details}</Text>
//                     <Text style={{ fontSize: 15, color: "white" }}>{item.king}</Text>
//                   </View>
//                 }
//               </View>
//             )
//           }}
//         />
//       </View>
//     </View>
//   )
// }

// export default _layout

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingTop: 5,
//   },
//   container: {
//     height: 70,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 5,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
// });