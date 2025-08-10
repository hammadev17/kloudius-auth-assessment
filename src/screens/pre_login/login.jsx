import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EmailInputField from '../../components/InputTextField';
import PasswordInputField from '../../components/auth/PasswordInputField';
import PrimaryButton from '../../components/PrimaryButton';
import SocialIconsComboView from '../../components/auth/SocialIconsComboView';
import CustomSeparator from '../../components/auth/CustomSeparator';

const logoImg = require('../../assets/login.jpg');

const LoginScreen = ({ navigation }) => {
  const [userName, setUsername] = useState('Hammad Lodhi');
  const [emailId, setEmailId] = useState('');
  const [passowrd, setPassword] = useState('');

  const handlePasswordChange = newText => {
    setPassword(newText);
    console.log(newText);
  };

  const handleEmailChange = newText => {
    setEmailId(newText);
    console.log(newText);
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

          <PasswordInputField
            placeholderText="Password"
            onChangeText={handlePasswordChange}
            value={passowrd}
            onPressedVisibilityIcon={() => {}}
          />

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
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            title="Login"
            onPressed={() => {
              console.log('password: ' + passowrd);
              console.log('email: ' + emailId);
              if (emailId !== '' && passowrd !== '') {
                navigation.navigate('Home', {
                  userName: userName,
                  emailId: emailId,
                });
              } else {
                Alert.alert('Login', 'Required fields cannot be empty');
              }
            }}
          />

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
