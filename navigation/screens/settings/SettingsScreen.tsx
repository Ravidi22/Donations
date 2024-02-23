import { Button } from "@rneui/themed";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button title="שמור" type="clear" />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>הגדרות</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"close"} color={"black"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;

//   const [partnerIds, setPartnerIds] = useState([]);
// const addPartnerIdInput = () => {
//   if (partnerIds.length < 2) {
//     setPartnerIds([...partnerIds, ""]);
//   }
// };

// const updatePartnerId = (index, value) => {
//   const updatedIds = [...partnerIds];
//   updatedIds[index] = value;
//   setPartnerIds(updatedIds);
// };

// const removePartnerIdInput = (index) => {
//   const updatedIds = partnerIds.filter((_, idx) => idx !== index);
//   setPartnerIds(updatedIds);
// };
// {
//   /* {partnerIds.map((partnerId, index) => (
//         <TextInputWithIcon
//           key={index}
//           label={`מזהה שותף ${index + 1}`}
//           value={partnerId}
//           onChangeText={(text) => updatePartnerId(index, text)}
//           placeholder="הכנס מזהה שותף"
//           keyboardType="numeric"
//           maxLength={9}
//           Icon={"close-circle-outline"}
//           iconColor={"red"}
//           onPress={() => removePartnerIdInput(index)}
//         />
//       ))}

//       <Button
//         title="הוסף שותף"
//         buttonStyle={styles.buttonStyle}
//         containerStyle={{
//           width: 200,
//           marginHorizontal: 50,
//           marginVertical: 10,
//         }}
//         onPress={addPartnerIdInput}
//         titleStyle={{ fontWeight: "bold" }}
//       /> */
