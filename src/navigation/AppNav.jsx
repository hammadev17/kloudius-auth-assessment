import { useContext, useEffect } from 'react';

import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

import { AuthContext } from '../contexts/AuthContext';

function AppNav() {
  const { isLoading, userToken, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
