import React, { useState } from "react";
import { Synagogue } from "../../../navigation/screens/map/LocationsUtils";
import {
  View,
  StyleSheet,
  Text,
  Platform,
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
    field?: "morning" | "afternoon" | "evening"
  ) => void;
}

const SynagogueInput = (props: SynagogueInputProps) => {
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPrayerType, setCurrentPrayerType] = useState("");

  const [pickedTime, setPickedTime] = useState<Date>(undefined);

  const addPrayerTime = (type) => {
    setCurrentPrayerType(type);
    setModalVisible(true);
  };

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setPickedTime(currentDate);
    setModalVisible(false);
  };

  const onCancel = () => {
    setModalVisible(false);
  };
  const onConfirm = () => {
    setDate(pickedTime);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {["morning", "afternoon", "evening"].map((prayerType, index) => (
        <View key={prayerType} style={styles.prayerSection}>
          <View
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 5,
              borderRadius: 20,
            }}
          >
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
              <Ionicons name={"add-circle-outline"} color={"black"} size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.prayersList}>
            {props.location.prayers[prayerType].map((prayer, index) => (
              <Text key={`${prayerType}-${index}`}>{prayer}</Text>
            ))}
          </View>
          <Divider style={styles.divider} />
        </View>
      ))}

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
              value={date}
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
  prayerSection: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  prayersList: {
    flexDirection: "column",
    alignItems: "flex-start",
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
