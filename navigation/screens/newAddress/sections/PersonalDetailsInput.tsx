import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { BaseAddress } from "../../../../types/GeneralTypes";
import CollapsedSelect from "../../../../component/map/CollapsedSelect";
import { GenderToHebrew } from "../../../../types/HebrawRecords";

interface PersonalDetailsInputProps {
  address: BaseAddress;
  setPersonalDetails: (field: string, value: string | number) => void;
}

const PersonalDetailsInput = (props: PersonalDetailsInputProps) => {
  <View style={styles.container}>
    <TextInput
      mode="outlined"
      label={"שם מלא"}
      value={props.address.personalDetails.fullName}
      onChangeText={(text) => props.setPersonalDetails("fullName", text)}
      style={{ direction: "rtl", textAlign: "right" }}
    />
    <TextInput
      mode="outlined"
      label={"גיל"}
      value={props.address.personalDetails.age.toString()}
      keyboardType="numeric"
      onChangeText={(text) => props.setPersonalDetails("age", text)}
      style={{ direction: "rtl", textAlign: "right" }}
    />

    <CollapsedSelect title={"מגדר"} options={GenderToHebrew} />

    <TextInput
      mode="outlined"
      label={"מספר פלאפון"}
      value={props.address.personalDetails.phoneNumber}
      keyboardType="numeric"
      onChangeText={(text) => props.setPersonalDetails("phoneNumber", text)}
      style={{ direction: "rtl", textAlign: "right" }}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default PersonalDetailsInput;
