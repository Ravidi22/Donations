import { StyleSheet, View, Text, Modal } from "react-native";
import Button from "./Basic/Button";

export const AddAddressModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={isOpen}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>This is the modal content</Text>
        <Button label="Close" handlePress={() => setIsOpen(false)} />
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
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
