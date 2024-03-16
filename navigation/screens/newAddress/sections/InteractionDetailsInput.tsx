import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { BaseAddress } from "../../../../types/GeneralTypes";
import {
  IncomeLevelToHebrew,
  InitialRelationshipsToHebrew,
  ReligionsToHebrew,
} from "../../../../types/HebrawRecords";
import { ButtonGroup } from "@rneui/themed";

interface InteractionInputProps {
  address: BaseAddress;
  setInteractionDetails: (field: string, value: string | number) => void;
}

const InteractionDetailsInput = (props: InteractionInputProps) => {
  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={Object.values(InitialRelationshipsToHebrew)}
        selectedIndex={Object.values(InitialRelationshipsToHebrew).indexOf(
          props.address.interactionDetails.initialRelationship
        )}
        onPress={(value) =>
          props.setInteractionDetails("initialRelationship", value)
        }
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />

      <ButtonGroup
        buttons={Object.values(ReligionsToHebrew)}
        selectedIndex={Object.values(InitialRelationshipsToHebrew).indexOf(
          props.address.interactionDetails.religion
        )}
        onPress={(value) => props.setInteractionDetails("religion", value)}
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />

      <Text>האם הראה עניין והזדהות עם מטרות הארגון?</Text>
      <ButtonGroup
        buttons={["כן", "לא"]}
        selectedIndex={
          props.address.interactionDetails.showedIdentification ? 0 : 1
        }
        onPress={(value) =>
          props.setInteractionDetails("showedIdentification", value)
        }
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />

      <TextInput
        mode="outlined"
        label={"משך השיחה (בדקות)"}
        value={props.address.interactionDetails.time.toString()}
        onChangeText={(text) => props.setInteractionDetails("time", text)}
        keyboardType="numeric"
        style={{ direction: "rtl", textAlign: "right" }}
      />

      <ButtonGroup
        buttons={Object.values(IncomeLevelToHebrew)}
        selectedIndex={Object.values(IncomeLevelToHebrew).indexOf(
          props.address.interactionDetails.incomeLevel
        )}
        onPress={(value) => props.setInteractionDetails("incomeLevel", value)}
        containerStyle={{ marginBottom: 20, borderRadius: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default InteractionDetailsInput;
