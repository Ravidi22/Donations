
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToggleButtonGroup = ({ options, value, onChange }) => {
  return (
    <View style={styles.toggleButtonGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.toggleButton,
            value === option && styles.selectedButton
          ]}
          onPress={() => onChange(option)}
        >
          <Text
            style={[
              styles.toggleButtonText,
              value === option && styles.selectedButtonText
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButtonGroup: {
    flexDirection: 'row-reverse',
    backgroundColor: '#E0E0E0', 
    borderRadius: 25,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  selectedButton: {
    backgroundColor: '#1976D2', 
  },
  toggleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  selectedButtonText: {
    color: 'white',
  },
});
export default ToggleButtonGroup;