import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Button } from "@rneui/themed";
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

      <Button
        title="הוסף כתובת"
        icon={{
          name: "map-marker",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ padding: 5 }}
        buttonStyle={styles.buttonStyle}
        containerStyle={{
          position: "absolute",
          right: 20,
          bottom: 20,
        }}
        onPress={OpenModal}
        titleStyle={{ fontWeight: "bold" }}
      />

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
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    borderRadius: 30,
  },
});

export default MapContainer;
