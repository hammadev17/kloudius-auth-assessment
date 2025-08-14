import React, { useState } from 'react';
import { View, TextInput, Text, Keyboard } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

export default function InputTextField({
  iconName,
  placeholderText,
  keyboardType,
  onChangeText,
  value,
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          paddingVertical: 20,
        }}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={placeholderText}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          defaultValue={value}
        />
      </View>
    </View>
  );
}
