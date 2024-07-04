import { View, Text } from "react-native";
import { Colors } from "../constants/colors";
import RoundButton from "./RoundButton";
import { useState } from "react";

const Item = ({ title, value }) => {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);

  const handlePress = (btn) => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(false);
    setBtn4(false);

    if (btn === 1) {
      setBtn1(true);
    } else if (btn === 2) {
      setBtn2(true);
    } else if (btn === 3) {
      setBtn3(true);
    } else {
      setBtn4(true);
    }
  };
  return (
    <>
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ color: Colors.primary, fontSize: 18 }}>{title}</Text>
        <Text
          style={{ color: Colors.secondary, fontSize: 42, fontWeight: "500" }}
        >
          <Text style={{ fontWeight: "bold", color: Colors.accent2 }}>
            Rs.{" "}
          </Text>
          {btn1
            ? value[0]?.toLocaleString()
            : btn2
            ? value[1]?.toLocaleString()
            : btn3
            ? value[2]?.toLocaleString()
            : value[3]?.toLocaleString()}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 25,
        }}
      >
        <RoundButton
          title="24K"
          bgColor={btn1 ? Colors.accent : Colors.card}
          color={btn1 ? Colors.card : Colors.accent}
          onPress={() => handlePress(1)}
        />
        <RoundButton
          title="22K"
          bgColor={btn2 ? Colors.accent : Colors.card}
          color={btn2 ? Colors.card : Colors.accent}
          onPress={() => handlePress(2)}
        />
        <RoundButton
          title="21K"
          bgColor={btn3 ? Colors.accent : Colors.card}
          color={btn3 ? Colors.card : Colors.accent}
          onPress={() => handlePress(3)}
        />
        <RoundButton
          title="18K"
          bgColor={btn4 ? Colors.accent : Colors.card}
          color={btn4 ? Colors.card : Colors.accent}
          onPress={() => handlePress(4)}
        />
      </View>
    </>
  );
};

export default Item;
