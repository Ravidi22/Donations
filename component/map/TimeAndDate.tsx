import React from "react";
import { View, Text } from "react-native";

export interface TimeProps {
  timeString: string;
  dateString: string;
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
      <Text>{props.timeString}</Text>
      <Text>{props.dateString}</Text>
    </View>
  );
};

export default TimeView;
