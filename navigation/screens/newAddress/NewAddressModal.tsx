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
} from "../../../types/LocationsUtils";
import PrivateHouseInput from "../../../component/map/input/PrivateHouseInput";
import SynagogueInput from "../../../component/map/input/SynagogueInput";
import BuildingInput from "../../../component/map/input/BuildingInput";
import { initialsLocation } from "./InputOptions";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { addAddress } from "../../../state/reducers/routeReducer";

const NewAddressScreen = ({ navigation }) => {
  const route = useSelector((state: RootState) => state.route);
  const dispatch = useDispatch();

  const { date, time } = useCurrentDateTime();

  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  const [newAddress, setNewAddress] = useState<
    BaseLocation | PrivateHouse | Building | Synagogue
  >(initialsLocation);

  const handleInputChange = (
    name: string,
    value: string | number | string[],
    field?: PrayersType
  ) => {
    setNewAddress((prev: Synagogue) => {
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
    setNewAddress((prev: Synagogue) => ({
      ...prev,
      prayers: {
        ...prev.prayers,
        [type]: prev.prayers[type].filter((_, i) => i !== index),
      },
    }));
  };

  const isAddressValid = (): boolean => {
    return true;
  };

  const handleAddAddress = () => {
    if (isAddressValid()) {
      dispatch(addAddress(newAddress));
      navigation.navigate("Home");
    }
  };

  const [donation, setDonation] = useState("");
  const [note, setNote] = useState("");

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
            label={"שם"}
            value={newAddress.name.toString()}
            onChangeText={(text) => handleInputChange("name", text)}
            style={{ direction: "rtl", textAlign: "right" }}
          />

          <TextInput
            mode="outlined"
            label={"כתובת"}
            value={newAddress.address.toString()}
            onChangeText={(text) => handleInputChange("address", text)}
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
              location={newAddress as Synagogue}
              handleInputChange={handleInputChange}
              handleDeletePrayerTime={handleDeletePrayerTime}
            />
          )}
          {selectedIndex === 1 && (
            <BuildingInput
              location={newAddress as Building}
              handleInputChange={handleInputChange}
            />
          )}
          {selectedIndex === 2 && (
            <PrivateHouseInput
              location={newAddress as PrivateHouse}
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
