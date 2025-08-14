import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/pre_login/login.jsx';
import RegisterScreen from '../screens/pre_login/register.jsx';
import ForgotPassword from '../screens/pre_login/ForgotPassword.jsx';
const NavStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavStack.Navigator initialRouteName="Login">
      <NavStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <NavStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <NavStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: 'Forgot Password',
          headerTintColor: '#111',
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </NavStack.Navigator>
  );
};

export default AuthStack;
