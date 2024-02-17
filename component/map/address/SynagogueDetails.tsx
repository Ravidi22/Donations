import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Prayers } from "../../../navigation/screens/map/LocationsUtils";
import { Divider } from "@rneui/themed";

const SynagogueDetails = ({ prayers }: { prayers: Prayers }) => {
  return (
    <View style={styles.container}>
      <View style={styles.prayerSection}>
        <Text style={styles.prayerLabel}>שחרית:</Text>
        <View style={styles.prayersList}>
          {prayers.morning.map((prayer, index) => (
            <Text key={`morning-${index}`}>{prayer}</Text>
          ))}
        </View>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.prayerSection}>
        <Text style={styles.prayerLabel}>מנחה:</Text>
        <View style={styles.prayersList}>
          {prayers.afternoon.map((prayer, index) => (
            <Text key={`afternoon-${index}`}>{prayer}</Text>
          ))}
        </View>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.prayerSection}>
        <Text style={styles.prayerLabel}>ערבית:</Text>
        <View style={styles.prayersList}>
          {prayers.evening.map((prayer, index) => (
            <Text key={`evening-${index}`}>{prayer}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingVertical: 10,
  },
  prayerSection: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  prayersList: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  prayerLabel: {
    fontWeight: "bold",
    marginRight: 10,
  },
  divider: {
    alignSelf: "stretch",
    marginVertical: 5,
  },
});

export default SynagogueDetails;
