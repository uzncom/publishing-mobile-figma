import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// TextField 컴포넌트  (샘플화면으로 추후 디자인 확정 시 제작 필요)
export default function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  helperText,
  error,
  disabled = false,
}) {
  return (
    <View>
      {label ? <Text>{label}</Text> : null}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
      />

      {helperText ? 
      (
        <Text>{helperText}</Text>
      ) : null}
    </View>
  );
}