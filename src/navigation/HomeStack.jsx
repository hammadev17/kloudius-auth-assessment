import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardSreen from '../screens/post_login/Dashboard';
const NavStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name="Home"
        component={DashboardSreen}
        options={{ headerShown: false }}
      />
    </NavStack.Navigator>
  );
};

export default AuthStack;
