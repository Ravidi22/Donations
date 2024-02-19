import React from "react";
import { StyleSheet, View } from "react-native";
import MapContainer from "./screens/map/sections/MapContainer";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F8",
  },
});

export default MainScreen;
