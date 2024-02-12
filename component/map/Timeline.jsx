import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TimelineItem = ({ index, title, address }) => (
  <View style={styles.itemContainer}>
    <View style={styles.indexContainer}>
      <Text style={styles.indexText}>{index + 1}</Text>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  </View>
);

const Timeline = ({ data }) => (
  <View style={styles.container}>
    {data.map((item, index) => (
      <TimelineItem
        key={index}
        index={index}
        title={`${item.FirstName} ${item.LastName}`}
        address={item.Address}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  itemContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(199,199,199, 0.1)",
    borderRadius: 20,
    padding: 20,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
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
  indexText: {
    fontWeight: "bold",
    textAlign: "right",
  },
  title: {
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default Timeline;
