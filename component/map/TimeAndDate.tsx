import React from "react";
import { View, Text } from "react-native";

export interface TimeProps {
  time: string;
  date: string;
}

const TimeView = (props: TimeProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
      }}
    >
      <Text>{props.time}</Text>
      <Text>{props.date}</Text>
    </View>
  );
};

export default TimeView;
