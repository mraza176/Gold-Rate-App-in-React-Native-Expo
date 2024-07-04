import { Text, TouchableOpacity } from "react-native";
import React from "react";

const RoundButton = ({ title, color, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        borderRadius: 50,
        padding: 15,
      }}
    >
      <Text style={{ color: color, fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
