import React from "react";
import { TextInput } from "react-native-paper";
import { PrivateHouse } from "../../../navigation/screens/map/LocationsUtils";

interface PrivateHouseInputProps {
  location: PrivateHouse;
  handleInputChange: (name: string, value: string | number) => void;
}

const PrivateHouseInput = (props: PrivateHouseInputProps) => {
  return (
    <TextInput
      mode="outlined"
      label={"כניסה"}
      value={props.location.entrance}
      onChangeText={(text) => props.handleInputChange("entrance", text)}
      keyboardType="numeric"
      style={{ direction: "rtl", textAlign: "right" }}
    />
  );
};

export default PrivateHouseInput;
