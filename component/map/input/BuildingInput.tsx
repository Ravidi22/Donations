import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { Building } from "../../../types/LocationsUtils";

interface BuildingProps {
  location: Building;
  handleInputChange: (name: string, value: string | number) => void;
}

const BuildingInput = (props: BuildingProps) => {
  return (
    <View
      style={{
        direction: "rtl",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        mode="outlined"
        label={"קומה"}
        value={props.location.floor.toString()}
        onChangeText={(text) => props.handleInputChange("floor", text)}
        keyboardType="numeric"
        maxLength={3}
        style={{ direction: "rtl", textAlign: "right", width: 120 }}
      />
      <TextInput
        mode="outlined"
        label={"דירה"}
        value={props.location.apartment.toString()}
        onChangeText={(text) => props.handleInputChange("apartment", text)}
        keyboardType="numeric"
        maxLength={3}
        style={{ direction: "rtl", textAlign: "right", width: 120 }}
      />
    </View>
  );
};

export default BuildingInput;
