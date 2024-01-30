import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TextInput, TextInputWithIcon } from "../../component/Basic/TextInput";
import Button from "../../component/Basic/Button";
import Alert from "../../component/Basic/Alert";

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [partnerIds, setPartnerIds] = useState([]);

  const [organizationPassword, setOrganizationPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (true) {
      navigation.replace("Home");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    }
  };

  const addPartnerIdInput = () => {
    if (partnerIds.length < 2) {
      setPartnerIds([...partnerIds, ""]);
    }
  };

  const updatePartnerId = (index, value) => {
    const updatedIds = [...partnerIds];
    updatedIds[index] = value;
    setPartnerIds(updatedIds);
  };

  const removePartnerIdInput = (index) => {
    const updatedIds = partnerIds.filter((_, idx) => idx !== index);
    setPartnerIds(updatedIds);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {showAlert && <Alert message={"התחברות נכשלה"} />}

        <TextInput
          label={"תעודת זהות"}
          value={userId}
          onChangeText={setUserId}
          placeholder='הכנס ת"ז'
          keyboardType="numeric"
          maxLength={9}
        />

        {partnerIds.map((partnerId, index) => (
          <TextInputWithIcon
            key={index}
            label={`מזהה שותף ${index + 1}`}
            value={partnerId}
            onChangeText={(text) => updatePartnerId(index, text)}
            placeholder="הכנס מזהה שותף"
            keyboardType="numeric"
            maxLength={9}
            Icon={"close-circle-outline"}
            iconColor={"red"}
            onPress={() => removePartnerIdInput(index)}
          />
        ))}

        <Button label="הוסף שותף" handlePress={addPartnerIdInput} />

        <TextInputWithIcon
          label={"סיסמת הארגון"}
          value={organizationPassword}
          onChangeText={setOrganizationPassword}
          placeholder="הכנס סיסמת ארגון"
          secureTextEntry={!passwordVisible}
          onPress={() => setPasswordVisible(!passwordVisible)}
          Icon={passwordVisible ? "eye-outline" : "eye-off-outline"}
          iconColor={"black"}
        />

        <Button label="התחברות" handlePress={handleLogin} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F8",
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default LoginScreen;
