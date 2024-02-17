import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface AlertProps {
  message: string;
}

const Alert = (props: AlertProps) => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>{props.message}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
        <Ionicons name={"close-circle-outline"} color={"white"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "#f44336",
    padding: 15,
    transform: "slide",
    borderRadius: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  alertText: {
    textAlign: "right",
    color: "white",
    flex: 1,
  },
  closeButton: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alert;
