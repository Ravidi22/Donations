import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Button, ButtonGroup, Dialog, Divider, Icon } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import TimeView from "./TimeAndDate";
import useCurrentDateTime from "../../state/hooks/useCurrentDateTime";
import {
  Building,
  PrivateHouse,
  Synagogue,
} from "../../navigation/screens/map/LocationsUtils";

interface NewAddressModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
}
const NewAddressModal = (props: NewAddressModalProps) => {
  const { date, time } = useCurrentDateTime();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [location, setLocation] = useState<
    Location | PrivateHouse | Building | Synagogue
  >({
    name: "",
    address: "",
    avgDonations: 0,
    remark: "",
    floor: 0,
    apartment: 0,
    prayers: { morning: [], afternoon: [], evening: [] },
  });

  const handleInputChange = (name: string, value: string | number) => {
    setLocation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ScrollView>
      <Dialog
        isVisible={props.isVisible}
        onBackdropPress={props.onBackdropPress}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button title="שמור" type="clear" />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              הוספת כתובת
            </Text>
            <Icon name={"close"} />
          </View>
          <Divider style={{ padding: 2 }} />
          <View style={{ padding: 10 }}>
            <TimeView date={date} time={time} />
            <ButtonGroup
              buttons={["בית כנסת", "בניין", "קרקע"]}
              selectedIndex={selectedIndex}
              onPress={(value) => setSelectedIndex(value)}
              containerStyle={{ marginBottom: 20, borderRadius: 20 }}
            />
            {selectedIndex === 0 && (
              <View
                style={{
                  direction: "rtl",
                  flexDirection: "column",
                }}
              >
                <TextInput
                  mode="outlined"
                  label={"שחרית"}
                  value={(location as Building).floor.toString()}
                  onChangeText={(text) => handleInputChange("floor", text)}
                  keyboardType="numeric"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    marginVertical: 5,
                  }}
                />
                <TextInput
                  mode="outlined"
                  label={"מנחה"}
                  value={(location as Building).apartment.toString()}
                  onChangeText={(text) => handleInputChange("apartment", text)}
                  keyboardType="numeric"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    marginVertical: 5,
                  }}
                />
                <TextInput
                  mode="outlined"
                  label={"ערבית"}
                  value={(location as Building).apartment.toString()}
                  onChangeText={(text) => handleInputChange("apartment", text)}
                  keyboardType="numeric"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    marginVertical: 5,
                  }}
                />
              </View>
            )}
            {selectedIndex === 1 && (
              <View
                style={{
                  direction: "rtl",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TextInput
                  mode="outlined"
                  label={"קומה"}
                  value={(location as Building).floor.toString()}
                  onChangeText={(text) => handleInputChange("floor", text)}
                  keyboardType="numeric"
                  style={{ direction: "rtl", textAlign: "right" }}
                />
                <TextInput
                  mode="outlined"
                  label={"דירה"}
                  value={(location as Building).apartment.toString()}
                  onChangeText={(text) => handleInputChange("apartment", text)}
                  keyboardType="numeric"
                  style={{ direction: "rtl", textAlign: "right" }}
                />
              </View>
            )}
            {selectedIndex === 2 && (
              <TextInput
                mode="outlined"
                label={"כניסה"}
                value={(location as PrivateHouse).entrance}
                onChangeText={(text) => handleInputChange("floor", text)}
                keyboardType="numeric"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            )}

            {/* <TextInput
              label={"סכום תרומה"}
              value={userId}
              onChangeText={setUserId}
              placeholder="הכנס סכום"
              keyboardType="numeric"
              maxLength={9}
            />
            <TextInput
              label={"הערה"}
              value={remark}
              onChangeText={setRemark}
              placeholder="הכנס הערה"
              maxLength={9}
            /> */}
          </View>
        </View>
      </Dialog>
    </ScrollView>
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

export default NewAddressModal;
