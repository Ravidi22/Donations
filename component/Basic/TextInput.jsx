import React from "react";
import {
  View,
  Text,
  TextInput as ReactTextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export const TextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  label,
  maxLength,
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <ReactTextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const TextInputWithIcon = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  toggleVisibility,
  label,
  Icon,
  iconSize,
  iconColor,
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <ReactTextInput
          style={styles.passwordInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={toggleVisibility} style={styles.icon}>
          <Ionicons
            name={Icon}
            color={iconColor || "black"}
            size={iconSize || 20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    width: "100%",
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    textAlign: "right",
    fontSize: 12,
    marginTop: 5,
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    textAlign: "right",
    borderWidth: 0,
  },
  icon: {
    padding: 10,
  },
});
