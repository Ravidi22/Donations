import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
import { TextInput } from "../Basic/TextInput";
import TimeAndDate from "./TimeAndDate";

const AddressCard = ({ address, dateString, timeString }) => {
  const [userId, setUserId] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <View>
      <Divider style={{ padding: 2 }} />
      <View
        style={{
          padding: 10,
        }}
      >
        <TimeAndDate dateString={dateString} timeString={timeString} />
        <View style={styles.rowText}>
          <Text style={styles.title}>{`קומה: ${address.Floor}`}</Text>
          <Text style={styles.title}>{`דירה: ${address.Apartment}`}</Text>
        </View>

        <View style={styles.rowText}>
          <Text
            style={styles.title}
          >{`ממוצע תרומות: ${address.AvgDonations}`}</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  rowText: {
    direction: "rtl",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    fontWeight: "bold",
  },
});

export default AddressCard;
