import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import AddressCard from "./AddressCard";

export const TimelineItem = ({ index, address }) => {
  const [collapsed, setCollapsed] = useState(true);

  const [visited, setVisited] = useState(false);

  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("");

  const toggleCollapse = () => {
    if (collapsed) {
      const currentDate = new Date();
      const newDateString = `${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDate.getFullYear()}`;
      const newTimeString = `${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
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
          <Text style={styles.subTitle}>{address.Address}</Text>
        </View>
        <Icon
          name={collapsed ? "chevron-down-sharp" : "chevron-up-sharp"}
          type="ionicon"
          onPress={toggleCollapse}
        />
      </View>

      {!collapsed && (
        <AddressCard
          address={address}
          dateString={dateString}
          timeString={timeString}
        />
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
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
});
