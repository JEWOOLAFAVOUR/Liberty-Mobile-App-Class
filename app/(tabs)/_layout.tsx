import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const _layout = () => {
  const chatData = [
    {
      id: 1,
      profilePic:
        "https://img.freepik.com/free-photo/astonished-dark-skinned-little-boy-wearing-white-shirt-black-tie-enjoying-high-speed-wireless-internet-connection-digital-tablet-having-surprised-amazed-look-watching-cartoon-online_343059-4518.jpg?t=st=1721731166~exp=1721734766~hmac=540b89fd03e70ad32649d8b042df1cf6d72e045d9da49b10358c67eed165843a&w=826",
      chatName: "Ayomitrilz",
      description: "I'll send it today boss✊🏾",
      time: "10:15 AM",
    },
    {
      id: 2,
      profilePic:
        "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721731183~exp=1721734783~hmac=1f5d93383d873679183e7a0c97cbcabec3e9a9e8864a3030861851eab1f472a8&w=360",
      chatName: "Ayomitrilz",
      description: "I'll send it today boss✊🏾",
      time: "10:15 AM",
    },
    {
      id: 3,
      profilePic:
        "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721731183~exp=1721734783~hmac=1f5d93383d873679183e7a0c97cbcabec3e9a9e8864a3030861851eab1f472a8&w=360",
      chatName: "Ayomitrilz",
      description: "I'll send it today boss✊🏾",
      time: "10:15 AM",
    },
    {
      id: 4,
      profilePic:
        "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721731183~exp=1721734783~hmac=1f5d93383d873679183e7a0c97cbcabec3e9a9e8864a3030861851eab1f472a8&w=360",
      chatName: "Ayomitrilz",
      description: "I'll send it today boss✊🏾",
      time: "10:15 AM",
    },
    {
      id: 5,
      profilePic:
        "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721731183~exp=1721734783~hmac=1f5d93383d873679183e7a0c97cbcabec3e9a9e8864a3030861851eab1f472a8&w=360",
      chatName: "Ayomitrilz",
      description: "I'll send it today boss✊🏾",
      time: "10:15 AM",
    },
  ];

  return (
    <View style={styles.page}>
      <FlatList
        data={chatData}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image
                source={{ uri: item.profilePic }}
                style={{ height: 50, width: 50, borderRadius: 100 }}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontSize: 14, color: "black" }}>
                  {item.chatName}
                </Text>
                <Text style={{ fontSize: 14, color: "black" }}>
                  {item.description}
                </Text>
              </View>
              <View>
                <Text>{item.time}</Text>
                {/* <Text></Text> */}
              </View>
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
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
