import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import ZoomInOut from "../../../../component/map/ZoomInOut";
import { useLocationWatcher } from "../../../../state/hooks/useLocationWatcher";
import { DraggableBottomSheet } from "./DraggableBottomSheet ";
import { Icon } from "@rneui/themed";
import SettingsScreen from "../../settings/SettingsScreen";

const MapContainer = ({ navigation }) => {
  const mapRef = useRef(null);

  const { location, errorMsg } = useLocationWatcher(mapRef);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        initialRegion={location}
        showsUserLocation={true}
      />
      <ZoomInOut mapRef={mapRef} />

      <Icon
        name="menu"
        type="material"
        color="rgba(90, 154, 230, 1)"
        size={30}
        onPress={() => navigation.navigate("Settings")}
        containerStyle={{
          position: "absolute",
          left: 20,
          top: 120,
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      />

      <Icon
        name="add-circle-outline"
        type="material"
        color="white"
        size={40}
        onPress={() => navigation.navigate("NewAddress")}
        containerStyle={{
          position: "absolute",
          right: 20,
          bottom: 160,
          padding: 10,
          backgroundColor: "rgba(90, 154, 230, 1)",
          borderRadius: 50,
        }}
      />

      <DraggableBottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapContainer;
