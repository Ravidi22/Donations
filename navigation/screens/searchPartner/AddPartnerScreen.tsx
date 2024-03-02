import { Avatar, Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Users } from "../../../types/User";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar, Snackbar } from "react-native-paper";
import { useUserStore } from "../../../state/stores/useUserStore";

const AddPartnerScreen = ({ navigation }) => {
  const addPartner = useUserStore((state) => state.addPartner);
  const user = useUserStore((state) => state.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const [msg, setMsg] = useState("הזמנה נשלחה בהצלחה");

  const [isError, setIsError] = useState(false);

  const onToggleSnackBar = (isError: boolean, error?: string) => {
    setIsError(isError);
    setMsg(isError ? error : "הזמנה נשלחה בהצלחה");
    setVisible(!visible);
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          onIconPress={onDismissSnackBar}
          wrapperStyle={styles.snackBarContainer}
          style={{
            backgroundColor: isError ? "#f44336" : "#9ccc65",
          }}
        >
          <View style={styles.snackBarInnerContainer}>
            <Icon
              name={isError ? "error-outline" : "mark-email-read"}
              type="material"
              color={"white"}
              size={20}
            />
            <Text style={{ color: "white", paddingLeft: 10 }}>{msg}</Text>
          </View>
        </Snackbar>
        <Text style={styles.headerText}>פרופיל מתרים</Text>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name={"chevron-forward-outline"}
            color={"#5A97C2"}
            size={35}
          />
        </TouchableOpacity>
      </View>

      <Searchbar
        placeholder="הכנס שם מתרים"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ direction: "rtl", marginVertical: 20 }}
        inputStyle={{ textAlign: "right" }}
      />
      <ScrollView>
        {Users.filter(
          (OrgUser) =>
            OrgUser.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !user.partners.includes(OrgUser)
        ).map((partner, index) => (
          <View
            key={partner.id}
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.partner}>
              <Avatar
                size={40}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/women/57.jpg",
                }}
                containerStyle={{ backgroundColor: "white" }}
              />
              <View style={{ paddingRight: 5 }}>
                <Text>{partner.name}</Text>
              </View>
            </View>

            <Icon
              name={"person-add-outline"}
              type="ionicon"
              color={"#9ccc65"}
              size={20}
              onPress={() => {
                if (user.partners.length < 2) {
                  addPartner(partner);
                  onToggleSnackBar(false);
                } else {
                  onToggleSnackBar(true, "ניתן להזמין רק 2 שותפים");
                }
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
    right: 0,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 10,
  },
  partner: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 5,
  },
  snackBarContainer: {
    paddingTop: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    direction: "rtl",
  },
  snackBarInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddPartnerScreen;
