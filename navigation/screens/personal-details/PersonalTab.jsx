import React from "react";
import { View, StyleSheet } from "react-native";
import Avatar from "../../../component/Basic/Avatar";

const PersonalDetailsTab = () => {
  return (
    <View style={styles.container}>
      <Avatar image={require("../../../assets/personal.png")} size={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFF0F8",
  },
});

export default PersonalDetailsTab;
