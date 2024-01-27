import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Alert = ({ message, visible, onClose }) => {
  if (!visible) return null;

  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertText}>{message}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text>X</Text> {/* You can replace this with an icon */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#f44336', // Red background for error, change as needed
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  alertText: {
    color: 'white',
    flex: 1, // To ensure text takes up the majority of the alert container
  },
  closeButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Alert;
