import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";
import Header from "../components/Header";
import { useContext, useState } from "react";
import RoundButton from "../components/RoundButton";
import { GoldRateContext } from "../store/goldrate-context";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
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

  const goldRateContext = useContext(GoldRateContext);

  const handleCalculate = () => {
    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert("Error", "Please enter a valid amount in grams.");
      return;
    }
    if (btn1) {
      setResult(parseFloat(amount) * goldRateContext.values["1 Gram"][0]);
    } else if (btn2) {
      setResult(parseFloat(amount) * goldRateContext.values["1 Gram"][1]);
    } else if (btn3) {
      setResult(parseFloat(amount) * goldRateContext.values["1 Gram"][2]);
    } else {
      setResult(parseFloat(amount) * goldRateContext.values["1 Gram"][3]);
    }
  };

  const handleClear = () => {
    setAmount("");
    setResult(0);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingBottom: 125,
      }}
    >
      <Header title={"Rate Calculator"} />
      <View style={{ flex: 1, paddingHorizontal: 25 }}>
        <Text style={{ color: Colors.primary, fontSize: 18 }}>Total</Text>
        <Text
          style={{ color: Colors.secondary, fontSize: 42, fontWeight: "500" }}
        >
          <Text style={{ fontWeight: "bold", color: Colors.accent2 }}>
            Rs.{" "}
          </Text>
          {result.toLocaleString("en-IN")}
        </Text>
        <TextInput
          keyboardType="number-pad"
          cursorColor={Colors.secondary}
          placeholder="Enter Amount in Grams"
          placeholderTextColor={Colors.primary}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          style={{
            borderWidth: 2,
            borderColor: Colors.primary,
            borderRadius: 20,
            padding: 20,
            fontSize: 24,
            color: Colors.secondary,
            marginVertical: 25,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            marginBottom: 20,
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
        <TouchableOpacity
          onPress={handleCalculate}
          style={{
            marginVertical: 20,
            backgroundColor: Colors.accent,
            padding: 15,
            borderRadius: 20,
          }}
        >
          <Text
            style={{ color: Colors.card, textAlign: "center", fontSize: 18 }}
          >
            Calculate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClear}
          style={{
            backgroundColor: Colors.card,
            padding: 15,
            borderRadius: 20,
          }}
        >
          <Text
            style={{ color: Colors.accent, textAlign: "center", fontSize: 18 }}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
