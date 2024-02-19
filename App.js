import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import LoginScreen from "./navigation/screens/login/Login";
import MainScreen from "./navigation/Main";
import { store } from "./state/store";
import NewAddressScreen from "./navigation/screens/newAddress/NewAddressModal";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="התחברות" component={LoginScreen} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
