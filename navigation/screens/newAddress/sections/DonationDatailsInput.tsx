import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SegmentedButtons, TextInput } from "react-native-paper";
import { BaseAddress } from "../../../../types/GeneralTypes";
import CollapsedSelect from "../../../../component/map/CollapsedSelect";
import { PaymentMethodsToHebrew } from "../../../../types/HebrawRecords";
import { ButtonGroup } from "@rneui/themed";

interface DonationInputProps {
  address: BaseAddress;
  setDonationDetails: (field: string, value: string | number) => void;
}

const DonationDetailsInput = (props: DonationInputProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={"סכום התרומה"}
        value={props.address.donationDetails.donation.toString()}
        onChangeText={(text) => props.setDonationDetails("donation", text)}
        keyboardType="numeric"
        style={{ direction: "rtl", textAlign: "right" }}
      />

      <ButtonGroup
        buttons={["חודשי", "חד פעמי"]}
        selectedIndex={selectedIndex}
        onPress={(value) => props.setDonationDetails("paymentFrequency", value)}
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />

      {/* ToDo: add on change and value */}
      <CollapsedSelect title={"שיטת תשלום"} options={PaymentMethodsToHebrew} />

      <TextInput
        mode="outlined"
        label={"סיבת התרומה"}
        value={props.address.donationDetails.reason}
        onChangeText={(text) => props.setDonationDetails("reason", text)}
        style={{ direction: "rtl", textAlign: "right" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DonationDetailsInput;
