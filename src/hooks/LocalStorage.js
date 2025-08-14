import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocalStorage = () => {
  const [item, setItem] = useState(String || null);

  const storeItem = async (key: String, value: String) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfully!');
    } catch (e) {
      throw Error('AsyncStroage setItem error:' + e);
    }
  };

  const getItem = async (key: String) => {
    try {
      const value = await AsyncStorage.getItem(key);
      setItem(value);
      return value;
    } catch (e) {
      throw Error('AsyncStroage getItem error:' + e);
    }
  };

  const removeItem = async (key: String) => {
    try {
      await AsyncStorage.removeItem(key);
      setItem(null);
    } catch (e) {
      console.log('AsyncStroage removeItem error:' + e);
    }
  };
  return { item, storeItem, getItem, removeItem };
};
