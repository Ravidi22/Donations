import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PrivateHouseDetails = ({ entrance }: { entrance: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>כניסה:</Text>
        <Text>{entrance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 10,
  },
  section: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  divider: {
    alignSelf: "stretch",
    marginVertical: 5,
  },
});

export default PrivateHouseDetails;
