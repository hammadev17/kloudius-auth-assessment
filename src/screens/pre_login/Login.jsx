import React, { isValidElement, useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EmailInputField from '../../components/InputTextField.jsx';
import PasswordInputField from '../../components/auth/PasswordInputField.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import SocialIconsComboView from '../../components/auth/SocialIconsComboView.jsx';
import CustomSeparator from '../../components/auth/CustomSeparator.jsx';

import { AuthContext } from '../../contexts/AuthContext.js';
import {
  validateEmail,
  validatePasswordLength,
} from '../../constants/Constants.js';

const logoImg = require('../../assets/login.jpg');

const LoginScreen = ({ navigation }) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const { login } = useContext(AuthContext);

  const handlePasswordChange = newText => {
    setPassword(newText);
  };

  const handleEmailChange = newText => {
    setEmailId(newText);
  };

  const handleLogin = async () => {
    if (isValidatedForm()) {
      try {
        await login(emailId);
      } catch (e) {
        Alert.alert('Login Error', e);
      }
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handlePasswordFieldVisibility = () => {
    setPasswordVisible(!passwordVisible);
    return passwordVisible;
  };

  const isValidatedForm = () => {
    let isValid = false;
    const isEmailValid = validateEmail(emailId);
    if (emailId == '') {
      setErrorEmail('Required fields cannot be empty');
      isValid = false;
    } else if (!isEmailValid) {
      setErrorEmail('Email format must be valid');
      isValid = false;
    } else {
      setErrorEmail(null);
      isValid = true;
    }

    const isPasswordValid = password.length >= 6;
    if (password == '') {
      setErrorPassword('Required fields cannot be empty');
      isValid = false;
    } else if (!isPasswordValid) {
      setErrorPassword('Password length must be more then 6');
      isValid = false;
    } else {
      setErrorPassword(null);
      isValid = true;
    }
    return isValid;
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}
    >
      <KeyboardAwareScrollView
        style={{ paddingHorizontal: 25 }}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={20}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View style={{ alignItems: 'center' }}>
            <Image source={logoImg} style={{ width: 300, height: 300 }} />
            <Text
              style={{
                fontSize: 28,
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#333',
                marginBottom: 30,
              }}
            >
              Login
            </Text>
          </View>

          <EmailInputField
            iconName={'alternate-email'}
            placeholderText="Email ID"
            keyboardType={'email-address'}
            onChangeText={handleEmailChange}
            value={emailId}
          />
          {errorEmail && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorEmail}
            </Text>
          )}

          <PasswordInputField
            placeholderText="Password"
            onChangeText={handlePasswordChange}
            value={password}
            onPressedVisibilityIcon={handlePasswordFieldVisibility}
          />
          {errorPassword && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorPassword}
            </Text>
          )}

          <TouchableOpacity
            style={{
              marginTop: 8,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: '#5053f6',
                textAlign: 'right',
              }}
              onPress={() => handleForgotPassword}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <PrimaryButton title="Login" onPressed={handleLogin} />

          <CustomSeparator title={'or login with'} paddingBottom={10} />

          <SocialIconsComboView
            onPressedGoogle={() => {}}
            onPressedFacebook={() => {}}
            onPressedTwitter={() => {}}
          />

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>New to this app?</Text>
            <TouchableOpacity
              style={{ paddingHorizontal: 5 }}
              onPress={() => {}}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: '#5053f6',
                }}
                onPress={() => {
                  navigation.navigate('Register');
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
