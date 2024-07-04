import { View, ActivityIndicator } from "react-native";
import { Colors } from "../constants/colors";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
};

export default Loading;
