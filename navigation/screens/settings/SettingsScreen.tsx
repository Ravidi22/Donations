import { Avatar, Divider, Icon, ListItem } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useUserStore } from "../../../state/stores/useUserStore";

const SettingsScreen = ({ navigation }) => {
  const removePartner = useUserStore((state) => state.removePartner);
  const user = useUserStore((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>פרופיל מתרים</Text>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={"close"} color={"#5A97C2"} size={35} />
        </TouchableOpacity>
      </View>

      <Divider style={{ marginTop: 10, padding: 2 }} />

      <View style={styles.innerContainer}>
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
          style={styles.btn}
          onPress={() => navigation.navigate("AddPartners")}
          disabled={user.partners.length === 2}
        >
          <Text style={styles.btnText}>הוספת שותפים</Text>
          <Ionicons name={"person-add-outline"} size={20} />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>פרטים אישיים</Text>
          <Divider color="#5A97C2" width={1} style={{ paddingBottom: 3 }} />
          <Text style={styles.contentText}>{`שם מלא: ${user.name}`}</Text>
          <Text style={styles.contentText}>{`ת"ז : ${user.id}`}</Text>
          <Text
            style={styles.contentText}
          >{`ארגון: ${user.organization}`}</Text>
        </View>

        {user.partners.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>שותפים</Text>
            <Divider color="#5A97C2" width={1} />
            {user.partners.map((partner, index) => (
              <View style={styles.partner}>
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
                  onPress={() => removePartner(partner.id)}
                />
              </View>
            ))}
          </View>
        )}
        <View style={{ position: "absolute", bottom: 10 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnText}>התנתקות</Text>
            <Ionicons name="log-out-outline" size={20} />
          </TouchableOpacity>
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
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 25,
    width: "80%",
    height: "90%",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "rgba(90, 154, 230, 1)",
    paddingHorizontal: 60,
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  section: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    alignSelf: "stretch",
    marginVertical: 15,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
  },
  contentText: {
    textAlign: "right",
    fontSize: 16,
    marginVertical: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    width: "100%",
    textAlign: "center",
  },
  goBackBtn: {
    position: "absolute",
    right: 20,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    paddingRight: 5,
  },
  addPartnerBtn: {
    flexDirection: "row",
    backgroundColor: "#5A97C2",
    borderRadius: 5,
    padding: 3,
    marginVertical: 20,
    alignItems: "center",
  },
  partner: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default SettingsScreen;
