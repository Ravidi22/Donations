import React from "react";
import {
  View,
  Text,
  TextInput as ReactTextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  maxLength?: number;
}

interface TextInputWithIconProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  onPress: () => void;
  label?: string;
  Icon: string;
  iconSize?: number;
  iconColor?: string;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{props.label}</Text>
      <ReactTextInput
        style={styles.input}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export const TextInputWithIcon = (props: TextInputWithIconProps) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <ReactTextInput
          style={styles.passwordInput}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity onPress={props.onPress} style={styles.icon}>
          <Ionicons
            name={props.Icon}
            color={props.iconColor || "black"}
            size={props.iconSize || 20}
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
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    textAlign: "right",
    borderWidth: 0,
  },
  icon: {
    padding: 10,
  },
});
