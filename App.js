import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import Home from "./screens/Home";
import { Colors } from "./constants/colors";
import Calculator from "./screens/Calculator";
import GoldRateContextProvider from "./store/goldrate-context";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <GoldRateContextProvider>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
              tabBarStyle: {
                position: "absolute",
                bottom: 25,
                left: 25,
                right: 25,
                borderColor: "transparent",
                borderRadius: 50,
                height: 75,
                elevation: 0,
                backgroundColor: Colors.card,
              },
            }}
          >
            <BottomTabs.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ focused, size }) => (
                  <FontAwesome6
                    name="house"
                    color={focused ? Colors.accent : Colors.primary}
                    size={size}
                  />
                ),
              }}
            />
            <BottomTabs.Screen
              name="Calculator"
              component={Calculator}
              options={{
                tabBarIcon: ({ focused, size }) => (
                  <FontAwesome6
                    name="calculator"
                    color={focused ? Colors.accent : Colors.primary}
                    size={size}
                  />
                ),
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </GoldRateContextProvider>
    </>
  );
}
