import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Tabs
import PersonalDetailsTab from "./navigation/screens/PersonalDetailsTab";
import MoneyTab from "./navigation/screens/MoneyTab";
import RouteTab from "./navigation/screens/RouteDetailsTab";
import SelfPositionTab from "./navigation/screens/SelfPositionTab";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Route Details"
          component={RouteTab}
          options={{
            tabBarLabel: "Route Details",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="route" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Self Position"
          component={SelfPositionTab}
          options={{
            tabBarLabel: "Self Position",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Money"
          component={MoneyTab}
          options={{
            tabBarLabel: "Personal",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Personal"
          component={PersonalDetailsTab}
          options={{
            tabBarLabel: "Personal",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
