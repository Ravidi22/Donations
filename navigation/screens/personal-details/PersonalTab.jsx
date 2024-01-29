import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonalDetailsTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Personal Details Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F8",
  },
});
export default PersonalDetailsTab;
