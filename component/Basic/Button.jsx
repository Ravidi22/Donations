import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export const Button = ({ label, handlePress, style }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={style || styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  button: {
    backgroundColor: "#6855e0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "rgba(104, 85, 224, 0.2)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
