import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RouteIcon from "../assets/Icons/routeIcon";

// Tabs
import PersonalDetailsTab from "./screens/personal-details/PersonalTab";
import RouteTab from "./screens/route/RouteTab";
import MapTab from "./screens/map/MapTab";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    
      <Tab.Navigator initialRouteName="מפה">
        <Tab.Screen
          name="נתיב"
          component={RouteTab}
          options={{
            tabBarLabel: "נתיב",
            tabBarIcon: ({ color, size }) => (
              <RouteIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="מפה"
          component={MapTab}
          options={{
            tabBarLabel: "מפה",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />    
        <Tab.Screen
          name="אישי"
          component={PersonalDetailsTab}
          options={{
            tabBarLabel: "אישי",
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
  );
};

export default Tabs;
