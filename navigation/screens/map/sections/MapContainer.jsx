import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import MapView from "react-native-maps";
import { Button } from "../../../../component/Basic/Button";

import * as Location from "expo-location";

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

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        initialRegion={location} // Set the initial region to the user's location
        showsUserLocation={true}
      />
      <View style={{ position: "absolute", right: 20, bottom: 20 }}>
        <Button label={"הוספת כתובת"} handlePress={handlePress} />
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is the modal content</Text>
          <Button
            label="Close"
            handlePress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
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
