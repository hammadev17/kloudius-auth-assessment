import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';

const DashboardSreen = ({ route }) => {
  const navigation = useNavigation();
  const { userName, emailId } = route.params;

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
        onPressed={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default DashboardSreen;
