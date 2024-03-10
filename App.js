import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./navigation/screens/login/Login";
import MainScreen from "./navigation/Main";
import NewAddressScreen from "./navigation/screens/newAddress/NewAddressScreen";
import AddPartnerScreen from "./navigation/screens/searchPartner/AddPartnerScreen";
import SettingsScreen from "./navigation/screens/settings/SettingsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewAddress"
          component={NewAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="AddPartners"
          component={AddPartnerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
