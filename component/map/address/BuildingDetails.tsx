import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Divider } from "@rneui/themed";

interface BuildingProps {
  floor: number;
  apartment: number;
}

const BuildingDetails = (props: BuildingProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>קומה:</Text>
        <Text>{props.floor}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.label}>דירה:</Text>
        <Text>{props.apartment}</Text>
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

export default BuildingDetails;
