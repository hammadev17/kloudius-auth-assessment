import React from 'react';
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

const logoImg = require('../../assets/register.jpg');

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
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
            onChangeText={() => {}}
          />

          <InputTextField
            iconName={'alternate-email'}
            placeholderText="Email ID"
            keyboardType={'email-address'}
            onChangeText={() => {}}
          />

          <PasswordInputField
            placeholderText="Password"
            onChangeText={() => {}}
            onPressedVisibilityIcon={() => {}}
          />

          <PasswordInputField
            placeholderText="Confirm Password"
            onChangeText={() => {}}
            onPressedVisibilityIcon={() => {}}
          />

          <PrimaryButton title="Register" onPressed={() => {}} />

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
