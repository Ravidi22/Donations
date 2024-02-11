import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ZoomInOut = ({ mapRef }) => {
  const zoomIn = () => {
    if (mapRef.current) {
      mapRef.current.getCamera().then((camera) => {
        camera.zoom += 1;
        mapRef.current.animateCamera(camera, { duration: 400 });
      });
    }
  };

  const zoomOut = () => {
    if (mapRef.current) {
      mapRef.current.getCamera().then((camera) => {
        camera.zoom -= 1;
        mapRef.current.animateCamera(camera, { duration: 400 });
      });
    }
  };

  return (
    <View style={styles.zoomControl}>
      <TouchableOpacity style={styles.zoomButton} onPress={zoomIn}>
        <Icon name="plus" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.zoomButton} onPress={zoomOut}>
        <Icon name="minus" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  zoomControl: {
    position: "absolute",
    right: 20,
    top: 120,
    backgroundColor: "rgb(239, 240, 248, 0.6)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  zoomButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    width: "80%",
  },
});

export default ZoomInOut;
