import { Button } from "@rneui/themed";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button title="שמור" type="clear" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>הגדרות</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name={"close"} color={"black"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
