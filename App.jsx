/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AuthProvider } from './src/contexts/AuthContext.js';
import AppNav from './src/navigation/AppNav.jsx';

function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
