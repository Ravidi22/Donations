import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { User } from "../../../types/User";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"close"} color={"black"} size={30} />
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            {/* ToDo: take it from redux */}
            <Text style={styles.BoldText}>רביד רפאלוב</Text>
            <Text style={styles.secondaryText}>325310902</Text>
          </View>
          <Ionicons name={"person-circle-outline"} color={"black"} size={70} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  BoldText: {
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 16,
  },
  secondaryText: {
    textAlign: "right",
  },
});

export default SettingsScreen;
