import React, { useContext } from 'react';
import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import { AuthContext } from '../../contexts/AuthContext.js';

const DashboardSreen = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      Alert.alert('Logout Error', e.message);
    }
  };

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
        onPressed={handleLogout}
      />
    </SafeAreaView>
  );
};

export default DashboardSreen;
