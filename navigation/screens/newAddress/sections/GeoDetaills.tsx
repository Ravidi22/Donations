import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import {
  Building,
  GeoLocation,
  PrivateHouse,
  Synagogue,
} from "../../../../types/GeneralTypes";
import { ButtonGroup } from "@rneui/themed";
import PrivateHouseDetails from "../../../../component/map/address/PrivateHouseDetails";
import BuildingDetails from "../../../../component/map/address/BuildingDetails";
import SynagogueDetails from "../../../../component/map/address/SynagogueDetails";

interface GeoDetailsInputProps {
  GeoDetails: GeoLocation;
}

const GeoDetailsInput = (props: GeoDetailsInputProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={"עיר"}
        value={props.GeoDetails.city}
        style={{ direction: "rtl", textAlign: "right" }}
      />
      <TextInput
        mode="outlined"
        label={"רחוב"}
        value={props.GeoDetails.address}
        style={{ direction: "rtl", textAlign: "right" }}
      />
      <TextInput
        mode="outlined"
        label={"מספר בית"}
        value={props.GeoDetails.houseNumber.toString()}
        keyboardType="numeric"
        style={{ direction: "rtl", textAlign: "right" }}
      />

      <ButtonGroup
        buttons={["בית כנסת", "בניין", "קרקע"]}
        selectedIndex={selectedIndex}
        onPress={(value) => {}}
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />
      {selectedIndex === 0 && (
        <SynagogueDetails
          prayers={(props.GeoDetails.addressKind as Synagogue).prayers}
        />
      )}
      {selectedIndex === 1 && (
        <BuildingDetails
          floor={(props.GeoDetails.addressKind as Building).floor}
          apartment={(props.GeoDetails.addressKind as Building).apartment}
        />
      )}
      {selectedIndex === 2 && (
        <PrivateHouseDetails
          entrance={(props.GeoDetails.addressKind as PrivateHouse).entrance}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GeoDetailsInput;
