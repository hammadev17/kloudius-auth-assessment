import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardSreen from '../screens/post_login/dashboard.jsx';
const NavStack = createNativeStackNavigator();

const HomeStack = () => {
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

export default HomeStack;
