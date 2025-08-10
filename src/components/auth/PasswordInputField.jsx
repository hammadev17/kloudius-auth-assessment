import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

export default function PasswordInputField({
  placeholderText,
  onChangeText,
  value,
  onPressedVisibilityIcon,
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
          name="lock-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={placeholderText}
          keyboardType="default"
          onChangeText={onChangeText}
          defaultValue={value}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={onPressedVisibilityIcon}>
          <MaterialIcons
            name="visibility"
            size={20}
            color="#5053f6"
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
