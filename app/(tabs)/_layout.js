import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const _layout = () => {

  const profileData = [
    {
      id: 1,
      title: "Personal Data",
      iconName: require("../../assets/icons/person.png"),
    }, {
      id: 2,
      title: "Settings",
      iconName: require("../../assets/icons/person.png"),
    }, {
      id: 3,
      title: "Settings",
      iconName: require("../../assets/icons/person.png"),
    },
    {
      id: 4,
      title: "Settings",
      iconName: require("../../assets/icons/person.png"),
    },
  ]


  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <Image source={require('../../assets/images/man.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
        <View style={{ marginLeft: 14 }}>
          <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>Jewoola Favour</Text>
          <Text style={{ fontSize: 14, color: "#000" }}>Mobile App Developer</Text>
        </View>
      </View>

      {/* LIST  */}
      <View style={{ marginTop: 40 }}>
        <FlatList
          data={profileData}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, }}>
                <Image source={item.iconName} style={{ height: 24, width: 24 }} />
                <Text style={{ marginLeft: 15, flex: 1 }}>{item.title}</Text>
                <Image source={require('../../assets/icons/arrowright.png')} style={{ height: 15, width: 15 }} />
              </View>
            )
          }}
        />
      </View>


    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});