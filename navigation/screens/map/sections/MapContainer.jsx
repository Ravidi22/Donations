import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
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
      <TouchableOpacity style={styles.addButton} onPress={handlePress}>
        <Ionicons name="add-circle" size={50} color="#6a96bc" />
      </TouchableOpacity>

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
            title="Close"
            onPress={() => setModalVisible(!modalVisible)}
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
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MapContainer;
