import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const googleLogoImg = require('../../assets/google-logo.png');
const facebookLogoImg = require('../../assets/facebook-logo.png');
const twitterLogoImg = require('../../assets/twitter-logo.png');

export default function SocialIconsComboView({
  onPressedGoogle,
  onPressedFacebook,
  onPressedTwitter,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 25,
      }}
    >
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
        }}
        onPress={onPressedGoogle}
      >
        <Image source={googleLogoImg} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
        }}
        onPress={onPressedFacebook}
      >
        <Image source={facebookLogoImg} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
        }}
        onPress={onPressedTwitter}
      >
        <Image source={twitterLogoImg} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    </View>
  );
}
