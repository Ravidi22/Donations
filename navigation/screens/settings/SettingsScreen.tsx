import { Avatar, Divider, Icon, ListItem } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "רביד רפאלוב",
    id: 325310902,
    organization: "אירית עיצובים",
  });

  const [parters, setPartners] = useState([
    {
      name: "רביד רפאלוב",
      id: 325310902,
      organization: "אירית עיצובים",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      name: "רביד רפאלוב",
      id: 325310902,
      organization: "אירית עיצובים",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            position: "relative",
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              position: "absolute",
              width: "100%",
              textAlign: "center",
            }}
          >
            פרופיל מתרים
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
              backgroundColor: "rgba(200, 200, 200, 0.2)",
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name={"close"} color={"#5A97C2"} size={35} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingVertical: 25,
            justifyContent: "space-between",
            width: "80%",
            height: "90%",
          }}
        >
          <Avatar
            size={80}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/women/57.jpg" }}
            containerStyle={{ backgroundColor: "white" }}
          >
            <Avatar.Accessory
              size={24}
              style={{
                backgroundColor: "white",
                borderColor: "#5A97C2",
                borderWidth: 1,
              }}
              color={"#5A97C2"}
            />
          </Avatar>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#5A97C2",
              borderRadius: 5,
              padding: 3,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("")}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                textAlign: "center",
                paddingRight: 5,
              }}
            >
              הוספת שותפים
            </Text>
            <Ionicons name={"person-add-outline"} size={24} />
          </TouchableOpacity>

          <View style={styles.section}>
            <Text style={styles.headerText}>פרטים אישיים</Text>
            <Divider color="#5A97C2" width={1} style={{ paddingBottom: 3 }} />
            <Text style={styles.contentText}>{`שם מלא: ${user.name}`}</Text>
            <Text style={styles.contentText}>{`ת"ז : ${user.id}`}</Text>
            <Text
              style={styles.contentText}
            >{`ארגון: ${user.organization}`}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.headerText}>שותפים</Text>
            <Divider color="#5A97C2" width={1} />
            {parters.map((partner, index) => (
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Avatar
                  size={30}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/57.jpg",
                  }}
                  containerStyle={{ backgroundColor: "white" }}
                />
                <View style={{ paddingRight: 5 }}>
                  <Text>{partner.name}</Text>
                </View>
                <Icon
                  name={"remove-circle-outline"}
                  type="ionicon"
                  color={"red"}
                  size={20}
                  onPress={() => {}}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 40,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  section: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    alignSelf: "stretch",
  },
  headerText: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "500",
  },
  contentText: {
    textAlign: "right",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SettingsScreen;
