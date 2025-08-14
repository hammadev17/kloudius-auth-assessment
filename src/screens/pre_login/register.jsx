import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputTextField from '../../components/InputTextField';
import PasswordInputField from '../../components/auth/PasswordInputField';
import PrimaryButton from '../../components/PrimaryButton';
import SocialIconsComboView from '../../components/auth/SocialIconsComboView';
import CustomSeparator from '../../components/auth/CustomSeparator';
import { AuthContext } from '../../contexts/AuthContext';

const logoImg = require('../../assets/register.jpg');

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState(null);
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const { register } = useContext(AuthContext);

  const handleFullName = newText => {
    setFullName(newText);
  };

  const handleEmailChange = newText => {
    setEmailId(newText);
  };

  const handlePasswordChange = newText => {
    setPassword(newText);
  };

  const handleConfirmPasswordChange = newText => {
    setConfirmPassword(newText);
  };

  const handlePasswordFieldVisibility = () => {
    setPasswordVisible(!passwordVisible);
    return passwordVisible;
  };

  const handleConfirmPasswordFieldVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
    return confirmPasswordVisible;
  };

  const handleRegister = async () => {
    console.log('Fullname:' + fullName);
    console.log('email:' + emailId);
    console.log('password:' + password);
    console.log('confirm password:' + confirmPassword);

    if (
      fullName != null &&
      emailId !== null &&
      password !== null &&
      confirmPassword != null &&
      password == confirmPassword
    ) {
      try {
        await register(fullName, emailId);
      } catch (e) {
        console.log(e.message);
        Alert.alert('Register Error', e);
      }
      return;
    }
    setErrorName(
      fullName == null || fullName == ''
        ? 'Required fields cannot be empty'
        : null,
    );
    setErrorEmail(
      emailId == null || emailId == ''
        ? 'Required fields cannot be empty'
        : null,
    );
    setErrorPassword(
      password == null || password == ''
        ? 'Required fields cannot be empty'
        : null,
    );
    if (confirmPassword == null || confirmPassword == '') {
      setErrorConfirmPassword('Required fields cannot be empty');
    } else if (confirmPassword !== password) {
      setErrorConfirmPassword("Password doesn't match with confirm password");
    } else {
      setErrorConfirmPassword(null);
    }
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
              }}
            >
              Register
            </Text>
          </View>

          <SocialIconsComboView
            onPressedGoogle={() => {}}
            onPressedFacebook={() => {}}
            onPressedTwitter={() => {}}
          />

          <CustomSeparator title={'or with email'} bottomPadding={20} />

          <InputTextField
            iconName={'person'}
            placeholderText="Full Name"
            keyboardType={'default'}
            onChangeText={handleFullName}
          />
          {errorName && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorName}
            </Text>
          )}

          <InputTextField
            iconName={'alternate-email'}
            placeholderText="Email ID"
            keyboardType={'email-address'}
            onChangeText={handleEmailChange}
          />
          {errorEmail && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorEmail}
            </Text>
          )}

          <PasswordInputField
            placeholderText="Password"
            onChangeText={handlePasswordChange}
            onPressedVisibilityIcon={handlePasswordFieldVisibility}
          />
          {errorPassword && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorPassword}
            </Text>
          )}

          <PasswordInputField
            placeholderText="Confirm Password"
            onChangeText={handleConfirmPasswordChange}
            onPressedVisibilityIcon={handleConfirmPasswordFieldVisibility}
          />
          {errorConfirmPassword && (
            <Text style={{ fontSize: 12, fontWeight: 300, color: 'red' }}>
              {errorConfirmPassword}
            </Text>
          )}

          <PrimaryButton title="Register" onPressed={handleRegister} />

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>Already have an account?</Text>
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
                  navigation.goBack();
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
