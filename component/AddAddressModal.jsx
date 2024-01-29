import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export const AddAddressModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>This is the modal content</Text>
        <Button
          label="Close"
          handlePress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
