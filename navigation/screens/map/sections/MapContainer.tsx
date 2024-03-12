import React, { useState, useRef, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { LatLng, Polyline } from "react-native-maps";
import ZoomInOut from "../../../../component/map/ZoomInOut";
import { useLocationWatcher } from "../../../../state/hooks/useLocationWatcher";
import { DraggableBottomSheet } from "./DraggableBottomSheet ";
import { Icon } from "@rneui/themed";
import { getDirections } from "../MapMenager";
import { useRouteStore } from "../../../../state/stores/useRouteStore";

const MapContainer = ({ navigation }) => {
  const route = useRouteStore((state) => state.route);

  const mapRef = useRef(null);
  const { location, errorMsg } = useLocationWatcher(mapRef);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  // useMemo(() => {
  //   if (route.length >= 2) {
  //     const start = route[0].address;
  //     const destination = route[route.length - 1].address;
  //     const waypoints = route.slice(1, -1).map((location) => location.address);

  //     getDirections(start, destination, waypoints)
  //       .then((decodedPolyline) => {
  //         setRouteCoordinates(decodedPolyline);
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // }, [route]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        initialRegion={location}
        showsUserLocation={true}
      >
        <Polyline
          coordinates={route.map((address) => address.geoLocation.coordinates)}
          strokeWidth={2}
          strokeColor="red"
        />
      </MapView>

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
