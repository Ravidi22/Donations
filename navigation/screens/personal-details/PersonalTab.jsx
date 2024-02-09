import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";

const PersonalDetailsTab = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size={64}
        rounded
        icon={{
          name: "settings",
          type: "material",
          color: "black",
        }}
        containerStyle={{ backgroundColor: "#6733b9" }}
      />
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
