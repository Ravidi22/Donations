import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider, Icon } from "@rneui/themed";
import { TextInput } from "../Basic/TextInput";

export const TimelineItem = ({ index, address }) => {
  const [userId, setUserId] = useState("");
  const [remark, setRemark] = useState("");
  const [visited, setVisited] = useState(false);

  const [collapsed, setCollapsed] = useState(true);

  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("");

  const toggleCollapse = () => {
    if (collapsed) {
      const currentDate = new Date();
      const newDateString = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
      const newTimeString = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
      setDateString(newDateString);
      setTimeString(newTimeString);
    }
    setCollapsed(!collapsed);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
        backgroundColor: "rgba(199,199,199, 0.1)",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.indexContainer}>
          <Text style={styles.title}>{index + 1}</Text>
        </View>
        <View style={{ paddingRight: 5 }}>
          <Text
            style={styles.title}
          >{`${address.FirstName} ${address.LastName}`}</Text>
          <Text style={styles.address}>{address.Address}</Text>
        </View>
        <Icon
          name={collapsed ? "chevron-down-sharp" : "chevron-up-sharp"}
          type="ionicon"
          onPress={toggleCollapse}
        />
      </View>

      {!collapsed && (
        <View>
          <Divider style={{ padding: 2 }} />
          <View
            style={{
              padding: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
              }}
            >
              <Text>{timeString}</Text>
              <Text>{dateString}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingVertical: 10,
              }}
            >
              <Text>{address.AvgDonations}</Text>
              <Text style={styles.title}>ממוצע תרומות:</Text>
            </View>

            <TextInput
              label={"סכום תרומה"}
              value={userId}
              onChangeText={setUserId}
              placeholder="הכנס סכום"
              keyboardType="numeric"
              maxLength={9}
            />

            <TextInput
              label={"הערה"}
              value={remark}
              onChangeText={setRemark}
              placeholder="הכנס הערה"
              maxLength={9}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indexContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "gray",
    borderStyle: "dotted",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "right",
  },
});
