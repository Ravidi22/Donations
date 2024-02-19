import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, ButtonGroup, Divider, Icon } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import TimeView from "../../../component/map/TimeAndDate";
import useCurrentDateTime from "../../../state/hooks/useCurrentDateTime";
import {
  BaseLocation,
  Building,
  PrivateHouse,
  Synagogue,
} from "../map/LocationsUtils";
import PrivateHouseInput from "../../../component/map/input/PrivateHouseInput";
import SynagogueInput from "../../../component/map/input/SynagogueInput";
import BuildingInput from "../../../component/map/input/BuildingInput";

const NewAddressScreen = ({ navigation }) => {
  const { date, time } = useCurrentDateTime();

  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const [location, setLocation] = useState<
    BaseLocation | PrivateHouse | Building | Synagogue
  >({
    name: "",
    address: "",
    avgDonations: 0,
    note: "",
    floor: 0,
    apartment: 0,
    prayers: { morning: [], afternoon: [], evening: [] },
  });

  const handleInputChange = (
    name: string,
    value: string | number | string[],
    field?: "morning" | "afternoon" | "evening"
  ) => {
    setLocation((prev: Synagogue) => {
      if (field) {
        return {
          ...prev,
          prayers: {
            ...prev.prayers,
            [field]: [...prev.prayers[field], value],
          },
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const [donation, setDonation] = useState("");
  const [note, setNote] = useState("");

  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button title="שמור" type="clear" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>הוספת כתובת</Text>
          <Icon name={"close"} />
        </View>
        <Divider style={{ padding: 2 }} />
        <View style={{ padding: 10 }}>
          <TimeView date={date} time={time} />
          <TextInput
            mode="outlined"
            label={"קומה"}
            value={location.name.toString()}
            onChangeText={(text) => handleInputChange("name", text)}
            keyboardType="numeric"
            style={{ direction: "rtl", textAlign: "right" }}
          />
          <TextInput
            mode="outlined"
            label={"כתובת"}
            value={location.address.toString()}
            onChangeText={(text) => handleInputChange("address", text)}
            keyboardType="numeric"
            style={{ direction: "rtl", textAlign: "right" }}
          />
          <ButtonGroup
            buttons={["בית כנסת", "בניין", "קרקע"]}
            selectedIndex={selectedIndex}
            onPress={(value) => setSelectedIndex(value)}
            containerStyle={{ marginBottom: 20, borderRadius: 20 }}
          />
          {selectedIndex === 0 && (
            <SynagogueInput
              location={location as Synagogue}
              handleInputChange={handleInputChange}
            />
          )}
          {selectedIndex === 1 && (
            <BuildingInput
              location={location as Building}
              handleInputChange={handleInputChange}
            />
          )}
          {selectedIndex === 2 && (
            <PrivateHouseInput
              location={location as PrivateHouse}
              handleInputChange={handleInputChange}
            />
          )}

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default NewAddressScreen;
