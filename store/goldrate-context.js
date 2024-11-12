import { createContext, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

export const GoldRateContext = createContext({
  values: {},
  fetchData: () => {},
  isLoading: false,
});

const GoldRateContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    "1 Tola": [0, 0, 0, 0, 0],
    "10 Gram": [0, 0, 0, 0, 0],
    "1 Gram": [0, 0, 0, 0, 0],
    "1 Ounce": [0, 0, 0, 0, 0],
  });

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://gold-prices-pakistan.p.rapidapi.com/live",
        headers: {
          "x-rapidapi-key": process.env.EXPO_PUBLIC_API_KEY,
          "x-rapidapi-host": "gold-prices-pakistan.p.rapidapi.com",
        },
      };

      // const options = {
      //   method: "GET",
      //   url: "https://live-metal-prices.p.rapidapi.com/v1/latest/XAU_18K,XAU_21K,XAU_22K,XAU_24K/PKR/gram",
      //   headers: {
      //     "x-rapidapi-key": process.env.EXPO_PUBLIC_API_KEY,
      //     "x-rapidapi-host": "live-metal-prices.p.rapidapi.com",
      //   },
      // };

      setIsLoading(true);

      const response = await axios.request(options);

      // const data = {
      //   "1 Tola": [
      //     Math.round(response.data.rates.XAU_24K * 11.6638),
      //     Math.round(response.data.rates.XAU_22K * 11.6638),
      //     Math.round(response.data.rates.XAU_21K * 11.6638),
      //     Math.round(response.data.rates.XAU_18K * 11.6638),
      //   ],
      //   "10 Gram": [
      //     Math.round(response.data.rates.XAU_24K * 10),
      //     Math.round(response.data.rates.XAU_22K * 10),
      //     Math.round(response.data.rates.XAU_21K * 10),
      //     Math.round(response.data.rates.XAU_18K * 10),
      //   ],
      //   "1 Gram": [
      //     Math.round(response.data.rates.XAU_24K),
      //     Math.round(response.data.rates.XAU_22K),
      //     Math.round(response.data.rates.XAU_21K),
      //     Math.round(response.data.rates.XAU_18K),
      //   ],
      //   "1 Ounce": [
      //     Math.round(response.data.rates.XAU_24K * 28.3495),
      //     Math.round(response.data.rates.XAU_22K * 28.3495),
      //     Math.round(response.data.rates.XAU_21K * 28.3495),
      //     Math.round(response.data.rates.XAU_18K * 28.3495),
      //   ],
      // };

      // const respons = {
      //   "1 Tola": [241650, 221511, 211444, 181238],
      //   "10 Gram": [207180, 189914, 181283, 155385],
      //   "1 Gram": [20718, 18991, 18128, 15539],
      //   "1 Ounce": [587350, 538400, 513931, 440513],
      // };

      setValues(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Error",
        "Please check your internet connection and try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <GoldRateContext.Provider
      value={{ values: values, fetchData: fetchData, isLoading: isLoading }}
    >
      {children}
    </GoldRateContext.Provider>
  );
};

export default GoldRateContextProvider;
