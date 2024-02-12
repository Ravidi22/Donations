import React, { useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import ActionsSpeedDial from "./ActionsSpeedDial";
import ZoomInOut from "../../../../component/map/ZoomInOut";
import { useLocationWatcher } from "../../../../state/hooks/UseLocationWatcher";
import { DraggableBottomSheet } from "./DraggableBottomSheet ";

const MapContainer = () => {
  const mapRef = useRef(null);

  const { location, errorMsg } = useLocationWatcher(mapRef);

  const [bottomSheetHeight, setBottomSheetHeight] = useState(150);

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

      <ActionsSpeedDial bottomSheetHeight />
      <DraggableBottomSheet onHeightChange={setBottomSheetHeight} />
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
