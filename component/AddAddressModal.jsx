import { StyleSheet, View, Text, Modal } from "react-native";
import { Button, Icon } from "@rneui/themed";

export const AddAddressModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={isOpen}>
      <View style={styles.modalView}>
        <View style={styles.TopView}>
          <Text style={styles.TextStyle}> הוספת כתובת</Text>
          <Icon
            name="arrow-right"
            type="font-awesome"
            color="rgba(90, 154, 230, 1)"
            onPress={() => setIsOpen(false)}
          />
        </View>
        <View style={styles.modalView}></View>
        <View style={styles.modalView}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EFF0F8",
    justifyContent: "center",
  },
  TopView: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  TextStyle: {
    fontSize: "20rem",
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    borderRadius: 30,
  },
});
