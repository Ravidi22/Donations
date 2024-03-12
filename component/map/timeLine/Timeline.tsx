import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { TimelineItem } from "./TimelineItem";
import { BaseAddress } from "../../../types/GeneralTypes";

const Timeline = ({ route }: { route: BaseAddress[] }) => (
  <ScrollView style={styles.container}>
    {route.map((item, index) => (
      <TimelineItem key={index} index={index} address={item} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
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

export default Timeline;
