import React, { useContext } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton';
import { AuthContext } from '../../contexts/AuthContext';

const DashboardSreen = ({}) => {
  const { user, logout } = useContext(AuthContext);

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
          paddingHorizontal: 25,
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
          Hello, {user.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            paddingVertical: 5,
          }}
        >
          {user.email}
        </Text>
      </View>
      <PrimaryButton
        title={'Logout'}
        borderRadius={0}
        bottomPadding={0}
        contentPaddingVertical={20}
        onPressed={() => {
          logout();
        }}
      />
    </SafeAreaView>
  );
};

export default DashboardSreen;
