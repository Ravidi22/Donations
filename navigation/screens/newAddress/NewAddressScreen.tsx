import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { ButtonGroup } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import TimeView from "../../../component/map/TimeAndDate";
import useCurrentDateTime from "../../../state/hooks/useCurrentDateTime";
import {
  Building,
  LocationType,
  PrayersType,
  PrivateHouse,
  Synagogue,
} from "../../../types/LocationsUtils";
import PrivateHouseInput from "../../../component/map/input/PrivateHouseInput";
import SynagogueInput from "../../../component/map/input/SynagogueInput";
import BuildingInput from "../../../component/map/input/BuildingInput";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useRouteStore } from "../../../state/stores/useRouteStore";

const NewAddressScreen = ({ navigation }) => {
  const addAddress = useRouteStore((state) => state.addAddress);
  const route = useRouteStore((state) => state.route);

  const { date, time } = useCurrentDateTime();

  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const [baseLocation, setBaseLocation] = useState({
    name: "",
    city: "",
    address: "",
    donation: 0,
    avgDonations: 0,
    note: "",
    isVisited: false,
  });

  const [privateHouseDetails, setPrivateHouseDetails] = useState({
    ...baseLocation,
    entrance: "",
  });

  const [buildingDetails, setBuildingDetails] = useState({
    ...baseLocation,
    floor: 0,
    apartment: 0,
  });

  const [synagogueDetails, setSynagogueDetails] = useState({
    ...baseLocation,
    prayers: { morning: [], afternoon: [], evening: [] },
  });

  const handleBaseInputChange = (field, value) => {
    setBaseLocation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePrivateHouseInputChange = (field, value) => {
    setPrivateHouseDetails((prev) => ({
      ...prev,
      [field]: value,
      ...baseLocation,
    }));
  };

  const handleBuildingInputChange = (field, value) => {
    setBuildingDetails((prev) => ({
      ...prev,
      [field]: value,
      ...baseLocation,
    }));
  };

  const handlePrayersInputChange = (
    name: string,
    value: string | number | string[],
    field: PrayersType
  ) => {
    setSynagogueDetails((prev) => {
      if (field) {
        return {
          ...prev,
          prayers: {
            ...prev.prayers,
            [field]: [...prev.prayers[field], value],
            ...baseLocation,
          },
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleDeletePrayerTime = (field: PrayersType, index: number) => {
    setSynagogueDetails((prev) => ({
      ...prev,
      prayers: {
        ...prev.prayers,
        [field]: prev.prayers[field].filter((_, i) => i !== index),
        ...baseLocation,
      },
    }));
  };
  const isAddressValid = (newAddress): boolean => {
    return true;
  };

  // const getNewAddress = (): LocationType => {
  //   if (selectedIndex === 0) {
  //     return synagogueDetails as Synagogue;
  //   } else if (selectedIndex === 1) {
  //     return buildingDetails as Building;
  //   }
  //   return privateHouseDetails as PrivateHouse;
  // };

  const handleAddAddress = () => {
    // if (isAddressValid(getNewAddress())) {
    //   addAddress(getNewAddress());
    //   navigation.navigate("Home");
    // }
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>כתובת חדשה</Text>
          <TouchableOpacity
            style={styles.goBackBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name={"close"} color={"#5A97C2"} size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.innerContainer}>
          <TimeView date={date} time={time} />
          <TextInput
            mode="outlined"
            label={"שם מלא"}
            value={baseLocation.name.toString()}
            onChangeText={(text) => handleBaseInputChange("name", text)}
            style={{ direction: "rtl", textAlign: "right" }}
          />

          <TextInput
            mode="outlined"
            label={"כתובת"}
            value={baseLocation.address.toString()}
            onChangeText={(text) => handleBaseInputChange("address", text)}
            style={{ direction: "rtl", textAlign: "right" }}
          />
          <ButtonGroup
            buttons={["בית כנסת", "בניין", "קרקע"]}
            selectedIndex={selectedIndex}
            onPress={(value) => setSelectedIndex(value)}
            containerStyle={{ marginVertical: 20, borderRadius: 20 }}
          />
          {selectedIndex === 0 && (
            <SynagogueInput
              location={synagogueDetails as Synagogue}
              handleInputChange={handlePrayersInputChange}
              handleDeletePrayerTime={handleDeletePrayerTime}
            />
          )}
          {selectedIndex === 1 && (
            <BuildingInput
              location={buildingDetails as Building}
              handleInputChange={handleBuildingInputChange}
            />
          )}
          {selectedIndex === 2 && (
            <PrivateHouseInput
              location={privateHouseDetails as PrivateHouse}
              handleInputChange={handlePrivateHouseInputChange}
            />
          )}

          <TextInput
            mode="outlined"
            label={"סכום תרומה"}
            value={baseLocation.donation.toString()}
            onChangeText={(text) => handleBaseInputChange("donation", text)}
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
            value={baseLocation.note.toString()}
            onChangeText={(text) => handleBaseInputChange("note", text)}
            style={{
              direction: "rtl",
              textAlign: "right",
              marginVertical: 5,
            }}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleAddAddress()}
          >
            <Text style={styles.btnText}>הוסף</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    paddingHorizontal: 60,
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
  goBackBtn: {
    position: "absolute",
    right: 20,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    width: "100%",
    textAlign: "center",
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    paddingVertical: 25,
    width: "80%",
    height: "90%",
  },
});

export default NewAddressScreen;
