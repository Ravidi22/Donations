import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import {
  TextInput,
  TextInputWithIcon,
} from "../../../component/Basic/TextInput";
import { Button } from "@rneui/themed";
import Alert from "../../../component/Basic/Alert";

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
  {
    /* {partnerIds.map((partnerId, index) => (
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

        <Button
          title="הוסף שותף"
          buttonStyle={styles.buttonStyle}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={addPartnerIdInput}
          titleStyle={{ fontWeight: "bold" }}
        /> */
  }
  return (
    <ImageBackground
      source={require("../../../assets/donationLogin.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showAlert && <Alert message={"התחברות נכשלה"} />}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "70%",
            backgroundColor: "white",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            padding: 30,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              paddingBottom: 30,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            התחברות
          </Text>
          <TextInput
            label={"תעודת זהות"}
            value={userId}
            onChangeText={setUserId}
            placeholder='הכנס ת"ז'
            keyboardType="numeric"
            maxLength={9}
          />

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

          <Button
            title="התחברות"
            buttonStyle={styles.buttonStyle}
            containerStyle={{
              paddingTop: 20,
              width: "100%",
            }}
            onPress={handleLogin}
            titleStyle={{ fontWeight: "bold", fontSize: 16 }}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    padding: 13,
    borderColor: "white",
    borderRadius: 30,
  },
});

export default LoginScreen;
