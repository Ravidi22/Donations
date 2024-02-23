import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  TextInput,
  TextInputWithIcon,
} from "../../../component/Basic/TextInput";

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [organizationPassword, setOrganizationPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/donationLogin.png")}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.cont3}>
        <Text
          style={{
            alignSelf: "center",
            paddingVertical: 30,
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

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>התחברות</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(238, 251, 255, 1)",
  },
  btn: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
  img: {
    height: "45%",
    width: "100%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
