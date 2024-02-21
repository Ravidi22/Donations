import React, { useState } from "react";
import {
  Prayers,
  PrayersType,
  Synagogue,
} from "../../../navigation/screens/map/LocationsUtils";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Divider } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";

interface SynagogueInputProps {
  location: Synagogue;
  handleInputChange: (
    name: string,
    value: string | number | string[],
    field?: PrayersType
  ) => void;
  handleDeletePrayerTime: (type: PrayersType, index: number) => void;
}

const SynagogueInput = (props: SynagogueInputProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPrayerType, setCurrentPrayerType] =
    useState<PrayersType>("morning");

  const [pickedTime, setPickedTime] = useState<Date>(new Date());

  const addPrayerTime = (type) => {
    setCurrentPrayerType(type);
    setModalVisible(true);
  };

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || pickedTime;
    setPickedTime(currentDate);
  };

  const onCancel = () => {
    setModalVisible(false);
  };
  const onConfirm = () => {
    props.handleInputChange(
      "prayers",
      `${pickedTime.getHours().toString().padStart(2, "0")}:${pickedTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
      currentPrayerType
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {["morning", "afternoon", "evening"].map(
        (prayerType: PrayersType, index: number) => (
          <View key={prayerType} style={styles.prayerSection}>
            <View style={styles.pryerContainer}>
              <Text style={[styles.prayerLabel, { marginRight: "auto" }]}>
                {prayerType === "morning"
                  ? "שחרית"
                  : prayerType === "afternoon"
                  ? "מנחה"
                  : "ערבית"}
                :
              </Text>
              <TouchableOpacity
                onPress={() => addPrayerTime(prayerType)}
                style={{ marginLeft: "auto" }}
              >
                <Ionicons
                  name={"add-circle-outline"}
                  color={"black"}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.prayerSection}>
              {props.location.prayers[prayerType].map((prayer, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      props.handleDeletePrayerTime(prayerType, index)
                    }
                  >
                    <Ionicons
                      name={"close-circle-outline"}
                      color={"red"}
                      size={20}
                    />
                  </TouchableOpacity>
                  <Text key={`${prayerType}-${index}`}>{prayer}</Text>
                </View>
              ))}
            </View>
            <Divider style={styles.divider} />
          </View>
        )
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              testID="dateTimePicker"
              value={pickedTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
            <View style={styles.buttonContainer}>
              <Button title="הוסף" onPress={onConfirm} />
              <Button title="יציאה" onPress={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 10,
  },
  pryerContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
    borderRadius: 20,
  },
  prayerSection: {
    flexDirection: "column",
  },
  prayerLabel: {
    fontWeight: "bold",
  },
  divider: {
    alignSelf: "stretch",
    marginVertical: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
export default SynagogueInput;
