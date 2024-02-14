import React from "react";
import { View, Text } from "react-native";

const TimeAndDate = ({ timeString, dateString }) => {
  return (
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
  );
};

export default TimeAndDate;
