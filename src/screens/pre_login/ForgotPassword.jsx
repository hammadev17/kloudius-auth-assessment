import React from 'react';
import { View, Alert } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import EmailInputField from '../../components/InputTextField.jsx';

const ForgotPassword = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#fff',
      }}
    >
      <EmailInputField
        iconName={'alternate-email'}
        placeholderText="Email ID"
        keyboardType={'email-address'}
        onChangeText={() => {}}
      />

      <PrimaryButton
        title="Submit"
        onPressed={() => {
          Alert.alert(
            'Forgot Password',
            'your request for password reset is submitted successfully.',
            [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'destructive',
              },
              {
                text: 'OK',
                onPress: () => navigation.goBack(),
                style: 'ok',
              },
            ],
          );
        }}
      />
    </View>
  );
};

export default ForgotPassword;
