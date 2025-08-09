import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import PrimaryButton from '../../components/PrimaryButton';

const DashboardSreen = () => {
  //const { userName, email } = route.params;
  const userName = 'Hammad Lodhi';
  const emailId = 'hammadkhan1789@gmail.com';
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 800,
            textAlign: 'center',
            paddingVertical: 5,
          }}
        >
          {userName}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            paddingVertical: 5,
          }}
        >
          {emailId}
        </Text>
      </View>
      <PrimaryButton
        title={'Logout'}
        borderRadius={0}
        bottomPadding={0}
        contentPaddingVertical={20}
        onPressed={() => {}}
      />
    </SafeAreaView>
  );
};

export default DashboardSreen;
