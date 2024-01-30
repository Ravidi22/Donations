import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import Button from "../../../../component/Basic/Button";
import { AddAddressModal } from "../../../../component/AddAddressModal";

import * as Location from "expo-location";
import ZoomInOut from "../../../../component/map/ZoomInOut";

const MapContainer = () => {
  const mapRef = useRef(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let unsubscribe = null;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      unsubscribe = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 1 },
        (newLocation) => {
          setLocation(newLocation);
          mapRef.current?.animateToRegion(
            {
              latitude: newLocation.coords.latitude,
              longitude: newLocation.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            },
            1000
          );
        }
      );
    })();

    return () => {
      if (unsubscribe) {
        unsubscribe.remove();
      }
    };
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const OpenModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        initialRegion={location}
        showsUserLocation={true}
      />

      <View style={{ position: "absolute", right: 20, bottom: 20 }}>
        <Button label={"הוספת כתובת"} handlePress={OpenModal} />
      </View>

      <ZoomInOut mapRef={mapRef} />

      <AddAddressModal isOpen={modalVisible} setIsOpen={setModalVisible} />
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
