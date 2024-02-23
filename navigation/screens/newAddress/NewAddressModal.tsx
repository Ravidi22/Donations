import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, ButtonGroup, Divider, Icon } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import TimeView from "../../../component/map/TimeAndDate";
import useCurrentDateTime from "../../../state/hooks/useCurrentDateTime";
import {
  BaseLocation,
  Building,
  PrayersType,
  PrivateHouse,
  Synagogue,
} from "../map/LocationsUtils";
import PrivateHouseInput from "../../../component/map/input/PrivateHouseInput";
import SynagogueInput from "../../../component/map/input/SynagogueInput";
import BuildingInput from "../../../component/map/input/BuildingInput";
import { initialsLocation } from "./InputOptions";
import Ionicons from "react-native-vector-icons/Ionicons";

const NewAddressScreen = ({ navigation }) => {
  const { date, time } = useCurrentDateTime();

  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const [location, setLocation] = useState<
    BaseLocation | PrivateHouse | Building | Synagogue
  >(initialsLocation);

  const handleInputChange = (
    name: string,
    value: string | number | string[],
    field?: PrayersType
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

  const handleDeletePrayerTime = (type: PrayersType, index: number) => {
    setLocation((prev: Synagogue) => ({
      ...prev,
      prayers: {
        ...prev.prayers,
        [type]: prev.prayers[type].filter((_, i) => i !== index),
      },
    }));
  };

  const [donation, setDonation] = useState("");
  const [note, setNote] = useState("");

  return (
    <ScrollView style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button title="שמור" type="clear" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>כתובת</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"close"} color={"black"} size={30} />
          </TouchableOpacity>
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
              handleDeletePrayerTime={handleDeletePrayerTime}
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
