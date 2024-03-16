import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
// import AddressCard from "../AddressCard";
import useCurrentDateTime from "../../../state/hooks/useCurrentDateTime";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BaseAddress } from "../../../types/GeneralTypes";

interface TimelineItemProps {
  address: BaseAddress;
  index: number;
}

export const TimelineItem = (props: TimelineItemProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const { date: currentDate, time: currentTime } = useCurrentDateTime();
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);

  const toggleCollapse = () => {
    setDate(currentDate);
    setTime(currentTime);
    setCollapsed(!collapsed);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
        backgroundColor: props.address.isVisited
          ? "#9ccc65"
          : "rgba(199,199,199, 0.3)",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.indexContainer}>
          {!props.address.isVisited ? (
            <Text style={styles.title}>{props.index + 1}</Text>
          ) : (
            <Ionicons
              name={"checkmark-done-outline"}
              color={"white"}
              size={20}
            />
          )}
        </View>
        <View style={{ paddingRight: 5 }}>
          <Text
            style={styles.title}
          >{`${props.address.personalDetails.fullName}`}</Text>
          <Text style={styles.subTitle}>
            {props.address.geoLocation.address}
          </Text>
        </View>
        <Icon
          name={collapsed ? "chevron-down-sharp" : "chevron-up-sharp"}
          type="ionicon"
          onPress={toggleCollapse}
        />
      </View>

      {!collapsed && (
        <></>
        // ToDo: Refactor. wait to Rotem ui
        // <AddressCard address={props.address} date={date} time={time} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indexContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "dotted",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
});
