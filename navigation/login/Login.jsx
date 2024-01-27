import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , ScrollView, KeyboardAvoidingView , Platform } from 'react-native';
import { isValidID , IsValidOrganizationPassword} from './Validation';
import ToggleButtonGroup from '../../component/ToggeleButtonGroup'

const LoginScreen = ({ navigation }) => {

  const [userId, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [organizationPassword, setOrganizationPassword] = useState('');

  const [loginOption, setLoginOption] = useState('לבד');

  const handleLogin = () => {
    if(isValidID(userId) || isValidID(partnerId) || IsValidOrganizationPassword(organizationPassword))
    {
          navigation.replace('Home');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{ padding: 20 }}>
        <ToggleButtonGroup
          options={['לבד', 'עם שותף']}
          value={loginOption}
          onChange={setLoginOption}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>תעודת זהות</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='הכנס ת"ז'
          maxLength={9}
          value={userId}
          onChangeText={setUserId}
        />
      </View>

      {loginOption != "לבד" && <View style={styles.inputGroup}>
        <Text style={styles.label}>תעודת זהות של השותף (אופציונלי)</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          maxLength={9}
          placeholder='הכנס ת"ז שותף'
          value={partnerId}
          onChangeText={setPartnerId}
        />
      </View>}

      <View style={styles.inputGroup}>
        <Text style={styles.label}>סיסמת הארגון</Text>
        <TextInput
          style={styles.input}
          placeholder="הכנס סיסמת ארגון"
          secureTextEntry
          value={organizationPassword}
          onChangeText={setOrganizationPassword}
        />
      </View>
      <Button title="התחברות" onPress={handleLogin} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 5,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    fontSize: 12,
    marginTop: 5,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign:'right'
  },
});

export default LoginScreen;
