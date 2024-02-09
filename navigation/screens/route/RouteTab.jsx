import React from "react";
import { View, StyleSheet } from "react-native";
import LocationsTable from "./sections/LocationsTable";
import { Button } from "@rneui/themed";

const RouteTab = () => {
  return (
    <View style={styles.container}>
      <Button
        title="נתיב חדש"
        buttonStyle={styles.buttonStyle}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {}}
        titleStyle={{ fontWeight: "bold" }}
      />
      <LocationsTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F8",
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
});
export default RouteTab;
