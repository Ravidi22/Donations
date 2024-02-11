// Timeline.js

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TimelineItem = ({ title, description, iconComponent }) => (
  <View style={styles.itemContainer}>
    <View style={styles.iconContainer}>{iconComponent}</View>
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  </View>
);

const Timeline = ({ data }) => (
  <ScrollView contentContainerStyle={styles.container}>
    {data.map((item, index) => (
      <TimelineItem
        key={index}
        title={item.title}
        description={item.description}
        iconComponent={item.iconComponent}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
});

export default Timeline;
