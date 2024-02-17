import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dialog } from "@rneui/themed";

const NewAddressModal = () => {
  const [visible2, setVisible2] = useState(false);

  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  return (
    <View>
      <Dialog isVisible={visible2} onBackdropPress={toggleDialog2}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="ACTION 1"
            onPress={() => console.log("Primary Action Clicked!")}
          />
          <Dialog.Button
            title="ACTION 2"
            onPress={() => console.log("Secondary Action Clicked!")}
          />
        </Dialog.Actions>
      </Dialog>
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

export default NewAddressModal;
