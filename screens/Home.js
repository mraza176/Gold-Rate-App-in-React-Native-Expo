import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";
import Header from "../components/Header";
import Item from "../components/Item";
import Loading from "../components/Loading";
import { useContext, useEffect } from "react";
import { GoldRateContext } from "../store/goldrate-context";

const Home = () => {
  const goldRateContext = useContext(GoldRateContext);

  useEffect(() => {
    goldRateContext.fetchData();
  }, []);

  if (goldRateContext.isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingBottom: 125,
      }}
    >
      <Header title="Home" isRefresh onPress={goldRateContext.fetchData} />
      <ScrollView>
        <View style={{ marginBottom: 20 }}>
          <Item
            title="1 Tola ≈ 11.664 Grams"
            value={goldRateContext.values["1 Tola"]}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Item title="10 Grams" value={goldRateContext.values["10 Gram"]} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Item title="1 Gram" value={goldRateContext.values["1 Gram"]} />
        </View>
        <Item
          title="1 Ounce ≈ 28.3495 Grams"
          value={goldRateContext.values["1 Ounce"]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;