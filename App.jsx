/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/pre_login/Login';
import RegisterScreen from './src/screens/pre_login/Register';
import DashboardSreen from './src/screens/post_login/Dashboard';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Login: {
//       screen: LoginScreen,
//     },
//     Register: {
//       screen: RegisterScreen,
//     },
//     Dashboard: {
//       screen: DashboardSreen,
//       options: { title: 'Home' },
//     },
//   },
// });

export default App;
