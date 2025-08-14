import { createContext, useEffect, useState } from 'react';
import { LocalStorage } from '../hooks/LocalStorage.js';
import User from '../models/User.js';
import { LocalStorageKeys } from '../constants/Constants.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { storeItem, getItem, removeItem } = LocalStorage();

  const register = async (username: String, email: String) => {
    setIsLoading(true);
    try {
      let value: User = JSON.parse(await getItem(LocalStorageKeys.user));
      if (value == null || value.email !== email) {
        console.log('inside register');
        let newUser: User = {
          id: '1',
          email: email,
          name: username,
          authToken: 'sdjhfbjsd',
        };
        await storeItem(LocalStorageKeys.user, JSON.stringify(newUser));
        await storeItem(LocalStorageKeys.userToken, newUser.authToken);
        setUserToken(newUser.authToken);
        setUser(newUser);
      } else if (value.email === email) {
        setErrorMessage('Email is already registered!!!');
      }
    } catch (e) {
      setIsLoading(false);
      throw e;
    }
    setIsLoading(false);
  };

  const login = async (email: String, password: String) => {
    setIsLoading(true);
    try {
      let value: User = JSON.parse(await getItem(LocalStorageKeys.user));
      if (value !== null && email === value.email) {
        value.authToken = 'sdjhfbjsd';
        await storeItem(LocalStorageKeys.user, JSON.stringify(value));
        await storeItem(LocalStorageKeys.userToken, value.authToken);
        setUserToken(value.authToken);
        setUser(value);
        console.log('user logged in successfull!!');
      } else {
        setErrorMessage('Email is not registered!!!');
      }
    } catch (e) {
      throw 'login error: ' + e;
    }
    setIsLoading(false);
  };

  const logout = async () => {
    try {
      let value: User = JSON.parse(await getItem(LocalStorageKeys.user));
      if (value !== null) {
        value.authToken = null;
        await storeItem(LocalStorageKeys.user, JSON.stringify(value));
        removeItem(LocalStorageKeys.userToken);
        setUserToken(null);
        setUser(value);
        console.log('user logged out successfull!!');
      }
      setIsLoading(false);
    } catch (e) {
      throw e;
    }
  };

  const isLoggedIn = async () => {
    setIsLoading(true);
    try {
      let value: User = JSON.parse(await getItem(LocalStorageKeys.user));
      if (value != null) {
        setUser(value);
        setUserToken(value.authToken);
      }
    } catch (e) {
      throw 'isloggedIn error: ' + e;
    }
    setIsLoading(false);
  };

  const setErrorMessage = (message: String | null) => {
    setIsLoading(false);
    if (message !== null) {
      console.log('Error: ' + message);
      throw message;
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        userToken,
        isLoading,
        isLoggedIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
