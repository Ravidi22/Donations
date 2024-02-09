import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Icon, lightColors } from "@rneui/themed";
import AddressDetails from "./AddressDetails";
const list = [
  {
    FirstName: "דני",
    LastName: "רביד",
    Address: "האלמוגים 24",
    Floor: 0,
    Remark: "שער סגור לבוא מסביב",
  },
  {
    FirstName: "איתי",
    LastName: "לוי",
    Address: "רוטשילד 10",
    Floor: 2,
    Remark: "בינה 4, דלת אחורית",
  },
  {
    FirstName: "שירה",
    LastName: "כהן",
    Address: "הנביאים 5",
    Floor: 3,
    Remark: "קוד לדלת 1234",
  },
  {
    FirstName: "יוסי",
    LastName: "מזרחי",
    Address: "בן גוריון 7",
    Floor: 1,
    Remark: "להשאיר מתחת לשטיח",
  },
  {
    FirstName: "תמר",
    LastName: "גולן",
    Address: "הברזל 34",
    Floor: 4,
    Remark: "לצלצל פעמיים",
  },
];

const LocationsTable = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {list.map((address, index) => {
          return (
            <ListItem.Accordion
              bottomDivider
              key={index}
              style={{ direction: "rtl" }}
              content={
                <>
                  <Icon
                    name="place"
                    style={{ paddingHorizontal: 5 }}
                    size={30}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{`${address.FirstName} ${address.LastName}`}</ListItem.Title>
                    <ListItem.Subtitle>{address.Address}</ListItem.Subtitle>
                  </ListItem.Content>
                </>
              }
              isExpanded={expandedId === index}
              onPress={() => toggleAccordion(index)}
            >
              <AddressDetails details={address} />
            </ListItem.Accordion>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: lightColors.greyOutline,
  },
});
export default LocationsTable;
