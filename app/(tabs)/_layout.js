import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const _layout = () => {

  const friends = ['Ade', "Bola", "Bimbo"]

  const x = 10 // normal variable

  const y = {
    name: "x",
    level: '100'
  } // Object

  const z = [1, 2, 3, 4] // array

  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 30 }}>List Class</Text>


      <FlatList
        data={z}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{item}</Text>
            </View>
          )
        }}




      />


    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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