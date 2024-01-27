import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapContainer from './sections/MapContainer';

const MapTab = () => {
  return (
    <View style={styles.container}>
      <MapContainer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapTab;
