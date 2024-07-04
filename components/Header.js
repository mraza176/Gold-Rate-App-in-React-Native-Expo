import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { FontAwesome6 } from "@expo/vector-icons";

const Header = ({ title, isRefresh, onPress }) => {
  return (
    <View
      style={{
        padding: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, color: Colors.secondary }}>{title}</Text>
      {isRefresh && (
        <TouchableOpacity onPress={onPress}>
          <FontAwesome6
            name="arrows-rotate"
            color={Colors.secondary}
            size={24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
