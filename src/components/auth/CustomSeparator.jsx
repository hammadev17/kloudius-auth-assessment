import React from 'react';
import { View, Text } from 'react-native';

export default function CustomSeparator({ title }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 10,
      }}
    >
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <View style={{ backgroundColor: '#ccc', height: 1 }} />
      </View>
      <Text style={{ textAlign: 'center', flex: 1 }}>{title}</Text>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <View style={{ backgroundColor: '#ccc', height: 1 }} />
      </View>
    </View>
  );
}
