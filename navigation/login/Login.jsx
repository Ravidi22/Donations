import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { isValidID, IsValidOrganizationPassword } from "./Validation";
import ToggleButtonGroup from "../../component/ToggeleButtonGroup";
import { TextInput, TextInputWithIcon } from "../../component/TextInput";

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [partnerId, setPartnerId] = useState("");
  const [organizationPassword, setOrganizationPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [loginOption, setLoginOption] = useState("לבד");

  const handleLogin = () => {
    if (
      isValidID(userId) ||
      isValidID(partnerId) ||
      IsValidOrganizationPassword(organizationPassword)
    ) {
    }
    navigation.replace("Home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ padding: 20 }}>
          <ToggleButtonGroup
            options={["לבד", "עם שותף"]}
            value={loginOption}
            onChange={setLoginOption}
          />
        </View>
        <TextInput
          label={"תעודת זהות"}
          value={userId}
          onChangeText={setUserId}
          placeholder='הכנס ת"ז'
          keyboardType="numeric"
          maxLength={9}
        />
        {loginOption != "לבד" && (
          <TextInput
            label={"תעודת זהות של השותף (אופציונלי)"}
            value={partnerId}
            onChangeText={setPartnerId}
            placeholder='הכנס ת"ז שותף'
            keyboardType="numeric"
            maxLength={9}
          />
        )}

        <TextInputWithIcon
          label={"סיסמת הארגון"}
          value={organizationPassword}
          onChangeText={setOrganizationPassword}
          placeholder="הכנס סיסמת ארגון"
          secureTextEntry={!passwordVisible}
          toggleVisibility={() => setPasswordVisible(!passwordVisible)}
          Icon={passwordVisible ? "eye-outline" : "eye-off-outline"}
          iconSize={20}
          iconColor={"black"}
        />

        <Button title="התחברות" onPress={handleLogin} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
  },
});

export default LoginScreen;
