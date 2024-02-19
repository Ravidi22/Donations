import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider, ButtonGroup } from "@rneui/themed";

import TimeView, { TimeProps } from "./TimeAndDate";
import {
  Building,
  LocationType,
  PrivateHouse,
  Synagogue,
} from "../../navigation/screens/map/LocationsUtils";
import SynagogueDetails from "./address/SynagogueDetails";
import BuildingDetails from "./address/BuildingDetails";
import PrivateHouseDetails from "./address/PrivateHouseDetails";
import { TextInput } from "react-native-paper";

interface AddressCardProps extends TimeProps {
  address: LocationType;
}

const AddressCard = (props: AddressCardProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (isSynagogue(props.address)) {
      setSelectedIndex(0);
    } else if (isBuilding(props.address)) {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(2);
    }
  }, [props.address]);

  function isSynagogue(address: LocationType): address is Synagogue {
    return "prayers" in address;
  }

  function isBuilding(address: LocationType): address is Building {
    return "floor" in address && "apartment" in address;
  }

  function isPrivateHouse(address: LocationType): address is PrivateHouse {
    return "entrance" in address;
  }
  const [donation, setDonation] = useState("");
  const [note, setNote] = useState("");

  return (
    <View>
      <Divider style={{ padding: 2 }} />
      <View style={{ padding: 10 }}>
        <TimeView date={props.date} time={props.time} />
        <ButtonGroup
          buttons={["בית כנסת", "בניין", "קרקע"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {}}
          containerStyle={{ marginBottom: 20, borderRadius: 20 }}
        />
        {selectedIndex === 0 && isSynagogue(props.address) && (
          <SynagogueDetails prayers={props.address.prayers} />
        )}
        {selectedIndex === 1 && isBuilding(props.address) && (
          <BuildingDetails
            floor={props.address.floor}
            apartment={props.address.apartment}
          />
        )}
        {selectedIndex === 2 && isPrivateHouse(props.address) && (
          <PrivateHouseDetails entrance={props.address.entrance} />
        )}
        <View style={styles.rowText}>
          <Text>{`ממוצע תרומות: ${props.address.avgDonations}`}</Text>
        </View>
        <TextInput
          mode="outlined"
          label={"סכום תרומה"}
          value={donation}
          onChangeText={setDonation}
          keyboardType="numeric"
          style={{
            direction: "rtl",
            textAlign: "right",
            marginVertical: 5,
          }}
        />
        <TextInput
          mode="outlined"
          label={"הערה"}
          value={note}
          onChangeText={setNote}
          keyboardType="numeric"
          style={{
            direction: "rtl",
            textAlign: "right",
            marginVertical: 5,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  rowText: {
    direction: "rtl",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default AddressCard;
