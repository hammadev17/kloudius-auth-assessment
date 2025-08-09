import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function PrimaryButton({
  title,
  onPressed,
  borderRadius = 8,
  bottomPadding = 30,
  contentPaddingVertical = 15,
  style,
}) {
  const customStyle = {
    borderRadius: borderRadius,
    bottomPadding: bottomPadding,
    contentPaddingVertical: contentPaddingVertical,
  };
  return (
    <View style={{ paddingVertical: customStyle.bottomPadding }}>
      <TouchableOpacity
        style={[
          style,
          {
            paddingVertical: customStyle.contentPaddingVertical,
            paddingHorizontal: 20,
            backgroundColor: '#5053f6',
            borderRadius: customStyle.borderRadius,
          },
        ]}
        onPress={onPressed}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
