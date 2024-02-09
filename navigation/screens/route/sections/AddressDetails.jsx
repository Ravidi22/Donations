import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddressDetails = ({ details }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Floor: {details.Floor}</Text>
      <Text style={styles.text}>Remark: {details.Remark}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AddressDetails;
